// import React from 'react';
// import './FilterBar.css';

// const FilterBar = ({ setFilter }) => (
//   <div className="filter-bar">
//     <select onChange={e => setFilter(e.target.value)} className="filter-select">
//       <option value="">All</option>
//       <option value="Interview">Interview</option>
//       <option value="Offer">Offer</option>
//       <option value="Rejected">Rejected</option>
//     </select>
//   </div>
// );

// export default FilterBar;
import React from 'react';
import './FilterBar.css';

const FilterBar = ({ setFilter }) => (
  <div className="filter-bar">
    <select onChange={e => setFilter(e.target.value)} className="filter-select">
      <option value="">All</option>
      <option value="Applied">Applied</option> {/* ✅ Added */}
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  </div>
);

export default FilterBar;
