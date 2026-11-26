import type { FC } from "react";

const JobsListLoading: FC = () => {
  return (
    <div className="jobs-list-loading" role="status" aria-live="polite" aria-label="Loading jobs">
      {[0, 1, 2].map((item) => (
        <div className="job-skeleton-card" key={item}>
          <div className="skeleton skeleton-logo" />
          <div className="skeleton-body">
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-company" />
            <div className="skeleton-meta">
              <div className="skeleton skeleton-meta-item" />
              <div className="skeleton skeleton-meta-item" />
              <div className="skeleton skeleton-meta-item" />
            </div>
            <div className="skeleton-tags">
              <div className="skeleton skeleton-tag" />
              <div className="skeleton skeleton-tag" />
              <div className="skeleton skeleton-tag" />
            </div>
          </div>
          <div className="skeleton-action">
            <div className="skeleton skeleton-btn" />
            <div className="skeleton skeleton-date" />
          </div>
        </div>
      ))}
      <span className="sr-only">Loading jobs...</span>
    </div>
  );
};

export default JobsListLoading;
