import React, { useState, useRef } from 'react';

const categories = [
  'All',
  'Beachfront',
  'Cabins',
  'Trending',
  'Luxury',
  'Camping',
  'City Breaks',
  'Countryside',
  'Mountain Retreats',
  'Island Getaways',
  'Castles',
  'Tiny Homes',
];

const Categories = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainer = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  const scrollLeft = () => {
    scrollContainer.current.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainer.current.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative flex items-center">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 bg-pink-500 text-white rounded-full p-2 shadow-md hover:bg-pink-600"
        style={{ transform: 'translate(-50%, 0)' }}
      >
        &lt;
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollContainer}
        className="flex overflow-x-auto py-4 whitespace-nowrap scroll-smooth gap-8 mx-8"
      >
        {categories.map((category) => (
          <div
            key={category}
            className={`flex flex-col items-center text-gray-800 cursor-pointer hover:text-pink-500 ${
              activeCategory === category ? 'text-pink-500 font-bold' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <i className="text-4xl mb-2">🏖️</i>
            <span>{category}</span>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 bg-pink-500 text-white rounded-full p-2 shadow-md hover:bg-pink-600"
        style={{ transform: 'translate(50%, 0)' }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Categories;
