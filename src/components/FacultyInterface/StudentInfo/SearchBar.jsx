import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Applications by Email"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <i className="fa fa-search" aria-hidden="true"></i>
    </div>
  );
};

export default SearchBar;
