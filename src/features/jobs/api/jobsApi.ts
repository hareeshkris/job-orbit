import api from "../../../lib/axios"
import type {  Job, JobApiResponse } from "../../../types/job.types"

export const fetchJobs = async ():Promise<Job[]>=>{
   const response = await api.get<JobApiResponse>("/remote-jobs");
    return response.data.jobs;
}