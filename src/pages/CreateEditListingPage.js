// src/pages/CreateEditListingPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import CreateListingForm from '../components/listings/CreateListingForm';
import Footer from '../components/layout/Footer';

const CreateEditListingPage = () => {
    return (
        <div>
            <Navbar />
            <CreateListingForm />
            <Footer />
        </div>
    );
};

export default CreateEditListingPage;

// This page contains a form for creating or editing a listing.
