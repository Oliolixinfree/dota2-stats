import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <label>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search..."
      />
    </label>
  );
};

export default Search;
