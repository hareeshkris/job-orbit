import type { Job } from "../../../types/job.types";
import JobCard from "./JobCard";
import JobsListEmpty from "./JobsListEmpty";
import JobsListError from "./JobsListError";
import JobsListLoading from "./JobsListLoading";

type JobsListProps = {
  jobs?: Job[];
  isLoading: boolean;
  isError: boolean;
  onRetry?: () => void;
};

const JobsList = ({ jobs, isLoading, isError, onRetry }: JobsListProps) => {
  return (
    <section className="jobs-list">
      <div className="jobs-list-header">
        <div>
          <h2>Available Jobs</h2>
          <p>Explore opportunities from top companies</p>
        </div>

        <select defaultValue="latest">
          <option value="latest">Latest Jobs</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
      {isLoading ? (
        <JobsListLoading />
      ) : isError ? (
        <JobsListError onRetry={onRetry} />
      ) : !jobs?.length ? (
        <JobsListEmpty />
      ) : (
        jobs?.map((job: Job) => <JobCard key={job.id} job={job} />)
      )}
    </section>
  );
};

export default JobsList;
