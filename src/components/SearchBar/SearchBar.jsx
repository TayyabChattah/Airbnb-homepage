import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    console.log(`Searching for location: ${location}`);
  };

  return (
    <div className="flex justify-center items-center p-2 bg-gray-100 rounded-full shadow-md">
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 rounded-full focus:outline-none"
      />
      <button onClick={handleSearch} className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
