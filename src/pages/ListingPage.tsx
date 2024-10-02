import React from 'react';
import Header from '../components/layout/Header';

import RelatedListings from '../components/listings/RelatedListings';
import Footer from '../components/layout/Footer';
import ListingGallery from '../components/listings/ListingGallery';
import ListingDetails from '../components/listings/ListingDetails';

const ListingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Image Gallery */}
            <ListingGallery />
            {/* Listing Details */}
            <ListingDetails />
          </div>
          <div className="p-6 border-t">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 mb-4">
              The iPhone 12 Pro Max is the largest iPhone in Apple&apos;s 2020 lineup. It features a 6.7-inch Super Retina XDR OLED display, 5G connectivity, A14 Bionic chip, and a pro camera system with 12MP ultra wide, wide, and telephoto lenses. This device is in excellent condition with minimal signs of use.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>6.7-inch Super Retina XDR OLED display</li>
              <li>A14 Bionic chip</li>
              <li>5G capable</li>
              <li>Pro camera system (12MP ultra wide, wide, and telephoto)</li>
              <li>LiDAR Scanner for improved AR experiences</li>
              <li>Face ID for secure authentication</li>
              <li>iOS 14</li>
            </ul>
            <p className="text-gray-700">
              This iPhone 12 Pro Max is unlocked and compatible with all major carriers. It comes with the original charger and cable. Don&apos;t miss this opportunity to own one of the most advanced smartphones on the market at a great price!
            </p>
          </div>
        </div>

        {/* Related Listings */}
        <RelatedListings />
      </main>
      <Footer />
    </>
  );
};

export default ListingPage;
