import React, { useRef } from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    { name: 'Icons', icon: 'fas fa-star' },
    { name: 'Rooms', icon: 'fas fa-door-open' },
    { name: 'Top cities', icon: 'fas fa-city' },
    { name: 'Amazing views', icon: 'fas fa-mountain' },
    { name: 'Treehouses', icon: 'fas fa-tree' },
    { name: 'Top of the world', icon: 'fas fa-globe' },
    { name: 'Bed & breakfasts', icon: 'fas fa-coffee' },
    { name: 'Mansions', icon: 'fas fa-hotel' },
    { name: 'Castles', icon: 'fas fa-chess-rook' },
    { name: 'OMG!', icon: 'fas fa-exclamation-circle' },
    { name: 'Trending', icon: 'fas fa-fire' },
    { name: 'Arctic', icon: 'fas fa-snowflake' },
    { name: 'Cabins', icon: 'fas fa-home' },
    { name: 'New', icon: 'fas fa-bolt' },
    { name: 'Camping', icon: 'fas fa-campground' },
    { name: 'Luxury', icon: 'fas fa-gem' },
    { name: 'Beach', icon: 'fas fa-umbrella-beach' },
    { name: 'Villas', icon: 'fas fa-house-damage' },
    { name: 'Unique stays', icon: 'fas fa-bed' },
  ];

  // Using useRef to target the scrollable container
  const categoriesContainerRef = useRef(null);

  // Function to handle scrolling when the arrow is clicked
  const handleScroll = (direction) => {
    const scrollAmount = 200; // Adjust this value to control how much it scrolls
    if (direction === 'right') {
      categoriesContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="categories-wrapper">
      <div className="categories-container" ref={categoriesContainerRef}>
        <div className="categories-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Scroll Arrow at the end */}
      <button className="scroll-arrow" onClick={() => handleScroll('right')}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Categories;
