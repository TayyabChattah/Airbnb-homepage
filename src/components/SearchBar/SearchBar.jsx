import React, { useState } from 'react';
import './SearchBar.css'; // You will create this file for styling

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for location: ${location}`);
    // You can add the logic to handle the search query here
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Where are you going?"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
