// src/pages/ChatConversationPage.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import ChatBox from '../components/messaging/ChatBox';
import MessageInput from '../components/messaging/MessageInput';
import Footer from '../components/layout/Footer';

const ChatConversationPage = () => {
    return (
        <div>
            <Navbar />
            <ChatBox />
            <MessageInput />
            <Footer />
        </div>
    );
};

export default ChatConversationPage;

// This page provides a real-time chat interface between buyer and seller.
