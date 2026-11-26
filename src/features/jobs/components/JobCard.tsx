import type { Job } from "../../../types/job.types";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const companyLogo = (company: string) => {
    return company.charAt(0).toUpperCase();
  };

  const publicationDate = (date: string) => {
    const publishedDate = new Date(date);
    const currentDate = new Date();
    const difference = currentDate.getTime() - publishedDate.getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return days;
  };
  return (
    <div className="job-card">
      <div className="company-logo">{companyLogo(job.company_name)}</div>

      <div className="job-details">
        <h3>{job?.title}</h3>
        <p className="company-name">{job?.company_name}</p>

        <div className="job-meta">
          <span>📍 {job?.candidate_required_location}</span>
          <span>💼 {job?.job_type}</span>
          <span>{job?.salary}</span>
        </div>
      </div>

      <div className="job-action">
        <button className="save-btn">♡</button>
        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="apply-btn"
        >
          Apply Now
        </a>
        <span>{publicationDate(job.publication_date)} days ago</span>
      </div>
    </div>
  );
};

export default JobCard;
