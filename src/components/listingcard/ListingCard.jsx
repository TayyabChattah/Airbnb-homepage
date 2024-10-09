import React from 'react';
import './ListingCard.css'; // Create this file for styling the card

const ListingCard = ({ property }) => {
  return (
    <div className="listing-card">
      <img src={property.image} alt={property.title} className="listing-image" />

      <div className="listing-details">
        <h3 className="listing-title">{property.title}</h3>
        <p className="listing-type">{property.type}</p>
        <p className="listing-info">
          {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
        </p>
        <p className="listing-price">${property.price} / night</p>
        <div className="listing-rating">
          <i className="fas fa-star"></i> {property.rating}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
