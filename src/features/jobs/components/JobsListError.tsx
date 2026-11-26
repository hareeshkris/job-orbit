type JobsListErrorProps = {
  message?: string;
  onRetry?: () => void;
};

const JobsListError = ({ message = "Something went wrong while loading jobs.", onRetry }: JobsListErrorProps) => {
  return (
    <div className="jobs-list-state jobs-list-error" role="alert">
      <div className="state-icon error-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="16.5" r="0.9" fill="currentColor" />
        </svg>
      </div>
      <h3>Unable to load jobs</h3>
      <p>{message}</p>
      {onRetry && (
        <button type="button" className="state-action-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default JobsListError;
