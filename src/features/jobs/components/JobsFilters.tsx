import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type JobsFiltersType = {
  selectedJobType: string[];
  setSelectedJobType: Dispatch<SetStateAction<string[]>>;
};

const JobsFilters = ({
  selectedJobType,
  setSelectedJobType,
}: JobsFiltersType) => {
  const handleJobType = (e: ChangeEvent<HTMLInputElement>, type: string) => {
    if (e.target.checked) {
      setSelectedJobType((prev) => [...prev, type]);
    } else {
      setSelectedJobType((prev) =>
        prev.filter((job_type) => job_type !== type),
      );
    }
  };
  
  return (
    <aside className="jobs-filters">
      <h3>Filters</h3>

      <div className="filter-group">
        <h4>Job Type</h4>
        <label>
          <input
            type="checkbox"
            onChange={(e) => handleJobType(e, "full_time")}
            checked={selectedJobType.includes("full_time")}
            value="full_time"
          />{" "}
          Full-time
        </label>
        <label>
          <input
            type="checkbox"
            value={"part_time"}
            onChange={(e) => handleJobType(e, "part_time")}
            checked={selectedJobType.includes("part_time")}
          />{" "}
          Part-time
        </label>
        <label>
          <input
            type="checkbox"
            value={"contract"}
            onChange={(e) => handleJobType(e, "contract")}
            checked={selectedJobType.includes("contract")}
          />{" "}
          Contract
        </label>
        <label>
          <input
            type="checkbox"
            value={"freelance"}
            onChange={(e) => handleJobType(e, "freelance")}
            checked={selectedJobType.includes("freelance")}
          />{" "}
          Internship
        </label>
      </div>

      <div className="filter-group">
        <h4>Experience Level</h4>
        <label>
          <input type="checkbox" /> Fresher
        </label>
        <label>
          <input type="checkbox" /> 1–3 Years
        </label>
        <label>
          <input type="checkbox" /> 3–5 Years
        </label>
        <label>
          <input type="checkbox" /> 5+ Years
        </label>
      </div>

      <div className="filter-group">
        <h4>Work Mode</h4>
        <label>
          <input type="checkbox" /> Remote
        </label>
        <label>
          <input type="checkbox" /> On-site
        </label>
        <label>
          <input type="checkbox" /> Hybrid
        </label>
      </div>
    </aside>
  );
};

export default JobsFilters;
