const JobsListEmpty = () => {
  return (
    <div className="jobs-list-state jobs-list-empty">
      <div className="empty-illustration" aria-hidden="true">
        <svg width="180" height="140" viewBox="0 0 180 140" fill="none">
          <rect x="24" y="18" width="132" height="96" rx="14" fill="#EEF2FF" />
          <rect x="36" y="32" width="108" height="68" rx="10" fill="white" stroke="#DDE3F0" />
          <rect x="48" y="46" width="36" height="36" rx="8" fill="#E0E7FF" />
          <path d="M60 70L64 66L68 70L72 62" stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="92" y="48" width="40" height="6" rx="3" fill="#CBD5E1" />
          <rect x="92" y="60" width="32" height="5" rx="2.5" fill="#E2E8F0" />
          <rect x="92" y="71" width="26" height="5" rx="2.5" fill="#E2E8F0" />
          <circle cx="140" cy="104" r="18" fill="#4F46E5" fillOpacity="0.12" />
          <circle cx="140" cy="104" r="12" fill="white" stroke="#6366F1" strokeWidth="2" />
          <circle cx="138" cy="102" r="4.5" stroke="#6366F1" strokeWidth="2" />
          <path d="M141.5 105.5L145.5 109.5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 112C28 104 34 104 42 112" stroke="#C7D2FE" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M150 24C154 20 158 20 162 24" stroke="#C7D2FE" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="18" cy="40" r="3" fill="#C7D2FE" />
          <circle cx="164" cy="78" r="2.5" fill="#CBD5E1" />
        </svg>
      </div>
      <h3>No jobs found</h3>
      <p>We couldn't find any jobs matching your search. Try adjusting filters or check back later.</p>
    </div>
  );
};

export default JobsListEmpty;
