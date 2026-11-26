import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../features/jobs/api/jobsApi";

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });
};
