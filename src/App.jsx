import React from 'react';
import Navbar from './components/navbar/navbar'; // Ensure this path is correct
import SearchBar from './components/searchbar/SearchBar'; // Ensure case-sensitivity is correct
import Categories from './components/catogories/Categories'; // Ensure case-sensitivity is correct
import ListingCard from './components/listingcard/ListingCard'; // Import the ListingCard component

// Dummy data for listings
const propertyList = [
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Beautiful Beachfront Villa',
    type: 'Entire home',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    price: 200,
    rating: 4.8,
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Cozy Cabin in the Woods',
    type: 'Private room',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 150,
    rating: 4.6,
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Urban Apartment in the City',
    type: 'Entire apartment',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 120,
    rating: 4.5,
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Charming Cottage',
    type: 'Entire home',
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    price: 180,
    rating: 4.7,
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Luxury Penthouse',
    type: 'Entire apartment',
    guests: 4,
    bedrooms: 3,
    bathrooms: 2,
    price: 300,
    rating: 4.9,
  },
  {
    image: 'https://via.placeholder.com/400x300',
    title: 'Countryside Retreat',
    type: 'Entire home',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 250,
    rating: 4.8,
  },
];

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <SearchBar />
      <Categories />
      
      {/* Listing section */}
      <div className="property-list">
        {propertyList.map((property, index) => (
          <ListingCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default App;
