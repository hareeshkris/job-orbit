const JobsFilters = () => {
  return (
    <aside className="jobs-filters">
      <h3>Filters</h3>

      <div className="filter-group">
        <h4>Job Type</h4>
        <label>
          <input type="checkbox" /> Full-time
        </label>
        <label>
          <input type="checkbox" /> Part-time
        </label>
        <label>
          <input type="checkbox" /> Contract
        </label>
        <label>
          <input type="checkbox" /> Internship
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
