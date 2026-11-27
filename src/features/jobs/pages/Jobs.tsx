import { useState } from "react";
import { useJobs } from "../../../hooks/useJobs";
import JobsFilters from "../components/JobsFilters";
import JobsHeader from "../components/JobsHeader";
import JobsList from "../components/JobsList";
import JobsSearch from "../components/JobsSearch";
import "./Jobs.scss";

const Jobs = () => {
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [selectedJobType, setSelectedJobType] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");
  const searchValue = search.toLowerCase().trim();
  const locationValue = location.toLowerCase().trim();
  const { data, isLoading, isError, refetch } = useJobs();

  const filteredJobs = data?.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(searchValue) ||
      job.company_name.toLowerCase().includes(searchValue);

    const matchLocation = job.candidate_required_location
      .toLowerCase()
      .includes(locationValue);
    const matchJobTypes =
      selectedJobType.length === 0 || selectedJobType.includes(job.job_type);
    return matchSearch && matchLocation && matchJobTypes;
  });

  const sortedJobs = [...(filteredJobs ?? [])].sort((a, b) => {
    const dateA = new Date(a.publication_date).getTime();
    const dateB = new Date(b.publication_date).getTime();

    if(sortOrder === 'latest'){
      return dateB - dateA
    }

    return dateA - dateB;
  });

  return (
    <div className="jobs-page">
      <JobsHeader />
      <JobsSearch
        setSearch={setSearch}
        search={search}
        setLocation={setLocation}
        location={location}
      />
      <div className="jobs-content">
        <JobsFilters
          selectedJobType={selectedJobType}
          setSelectedJobType={setSelectedJobType}
        />
        <JobsList
          jobs={sortedJobs}
          setSortOrder={setSortOrder}
          sortOrder={sortOrder}
          isLoading={isLoading}
          isError={isError}
          onRetry={() => refetch()}
        />
      </div>
    </div>
  );
};

export default Jobs;
