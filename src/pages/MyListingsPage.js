// src/pages/MyListingsPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ListingsGrid from '../components/listings/ListingsGrid';
import Footer from '../components/layout/Footer';
import { useListings } from '../hooks/useListings';

const MyListingsPage = () => {
    const { myListings } = useListings(); // Custom hook to get the user's listings

    return (
        <div>
            <Navbar />
            <ListingsGrid listings={myListings} />
            <Footer />
        </div>
    );
};

export default MyListingsPage;

// This page lists all listings created by the logged-in user.
