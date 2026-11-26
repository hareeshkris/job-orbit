export interface Job {
  id: number;
  title: string;
  company_name: string;
  candidate_required_location: string;
  salary: string;
  job_type: string;
  url: string;
  publication_date: string;
}

export interface JobApiResponse {
  "job-count": number;
  jobs: Job[];
}