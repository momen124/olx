// src/pages/ChatPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import InboxList from '../components/messaging/InboxList';
import Footer from '../components/layout/Footer';

const ChatPage = () => {
    return (
        <div>
            <Navbar />
            <InboxList />
            <Footer />
        </div>
    );
};

export default ChatPage;

// This page shows all chat conversations between the user and other parties.
