import React from 'react';

const Searchfilter = ({ handleFilterChange }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by location"
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Searchfilter;
