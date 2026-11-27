import type { Dispatch, SetStateAction } from "react";

type JobsSearchType = {
  search: string;
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
};
const JobsSearch = ({ search, setSearch, location,setLocation }: JobsSearchType) => {
  return (
    <div className="jobs-search">
      <div className="search-field">
        <span>⌕</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Job title, keywords or company"
        />
      </div>

      <div className="search-field">
        <span>⌖</span>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <button className="search-btn">Search Jobs</button>
    </div>
  );
};

export default JobsSearch;
