// src/pages/UserProfilePage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import ProfileForm from '../components/profile/ProfileForm';
import Footer from '../components/layout/Footer';

const UserProfilePage = () => {
    return (
        <div>
            <Navbar />
            <ProfileCard />
            <ProfileForm />
            <Footer />
        </div>
    );
};

export default UserProfilePage;

// This page displays the user's profile information and allows updates.
