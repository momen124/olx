import Image from 'next/image';
import React from 'react';

interface SearchResultItemProps {
  imageUrl: string;
  title: string;
  price: string;
  location: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ imageUrl, title, price, location }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{price}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default SearchResultItem;
