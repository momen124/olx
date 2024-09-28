import React from 'react';
import { ListingCard } from './ListingCard';
import { useListings } from '../../hooks/useListings';

const ListingsGrid: React.FC = () => {
    const { listings } = useListings();

    return (
        <div className="listings-grid">
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
};

export default ListingsGrid;
