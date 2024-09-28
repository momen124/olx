import React from 'react';

interface ListingProps {
    listing: {
        id: string;
        title: string;
        price: number;
        imageUrl: string;
    };
}

export const ListingCard: React.FC<ListingProps> = ({ listing }) => {
    return (
        <div className="listing-card">
            <img src={listing.imageUrl} alt={listing.title} />
            <h3>{listing.title}</h3>
            <p>${listing.price}</p>
            <button>View Details</button>
        </div>
    );
};
