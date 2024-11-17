import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/searchbar/SearchBar';
import Categories from './components/catogories/Categories';
import ListingCard from './components/listingcard/ListingCard';
import Footer from './components/footer/Footer';

const App = () => {
  const [listings, setListings] = useState([]); // State for listing data
  const [filteredListings, setFilteredListings] = useState([]); // State for filtered listings
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for active category
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Mock data fetching (simulating API call)
  useEffect(() => {
    const fetchData = async () => {
      const mockListings = [
        {
          id: 1,
          image: '/images/property1.jpg',
          title: 'Cozy Cabin',
          type: 'Entire home',
          guests: 4,
          bedrooms: 2,
          bathrooms: 1,
          price: 150,
          rating: 4.8,
        },
        {
          id: 2,
          image: '/images/property2.jpg',
          title: 'Beachfront Villa',
          type: 'Entire villa',
          guests: 8,
          bedrooms: 4,
          bathrooms: 3,
          price: 500,
          rating: 5.0,
        },
        {
          id: 3,
          image: '/images/property3.jpg',
          title: 'Mountain Retreat',
          type: 'Cabin',
          guests: 6,
          bedrooms: 3,
          bathrooms: 2,
          price: 300,
          rating: 4.7,
        },
      ];
      setListings(mockListings);
      setFilteredListings(mockListings); // Initialize filtered listings
    };

    fetchData();
  }, []);

  // Effect to filter listings by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredListings(listings);
    } else {
      setFilteredListings(
        listings.filter((listing) =>
          listing.type.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
    }
  }, [selectedCategory, listings]);

  // Effect to filter listings by search query
  useEffect(() => {
    setFilteredListings((prevListings) =>
      prevListings.filter((listing) =>
        listing.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto px-4">
        <SearchBar onSearch={setSearchQuery} />
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 my-4">
        <Categories onCategorySelect={setSelectedCategory} />
      </div>

      {/* Listings */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No listings found</p>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
