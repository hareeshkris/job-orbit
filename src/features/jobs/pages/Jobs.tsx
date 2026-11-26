import { useJobs } from "../../../hooks/useJobs";
import JobsFilters from "../components/JobsFilters";
import JobsHeader from "../components/JobsHeader";
import JobsList from "../components/JobsList";
import JobsSearch from "../components/JobsSearch";
import "./Jobs.scss";

const Jobs = () => {
  const { data, isLoading, isError, refetch } = useJobs();

  return (
    <div className="jobs-page">
      <JobsHeader />
      <JobsSearch />
      <div className="jobs-content">
        <JobsFilters />
        <JobsList jobs={data} isLoading={isLoading} isError={isError} onRetry={() => refetch()} />
      </div>
    </div>
  );
};

export default Jobs;
