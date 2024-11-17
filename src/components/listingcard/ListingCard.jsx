import React from 'react';

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-transform hover:-translate-y-1 max-w-xs">
      <img src={image} alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">{type} · {guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
        <p className="text-pink-500 font-bold">${price}/night</p>
        <div className="flex items-center">
          <i className="text-pink-500 mr-1">★</i>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
