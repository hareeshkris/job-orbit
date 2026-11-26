const JobsSearch = () => {
  return (
    <div className="jobs-search">
      <div className="search-field">
        <span>⌕</span>
        <input type="text" placeholder="Job title, keywords or company" />
      </div>

      <div className="search-field">
        <span>⌖</span>
        <input type="text" placeholder="Location" />
      </div>

      <button className="search-btn">Search Jobs</button>
    </div>
  );
};

export default JobsSearch;
