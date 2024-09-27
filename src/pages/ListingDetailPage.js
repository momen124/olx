// src/pages/ListingDetailPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ListingDetail from '../components/listings/ListingDetail';
import Footer from '../components/layout/Footer';

const ListingDetailPage = () => {
    return (
        <div>
            <Navbar />
            <ListingDetail />
            <Footer />
        </div>
    );
};

export default ListingDetailPage;

// This page shows detailed information about a listing.
