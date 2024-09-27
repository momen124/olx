// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserProfilePage from './pages/UserProfilePage';
import MyListingsPage from './pages/MyListingsPage';
import CreateEditListingPage from './pages/CreateEditListingPage';
import ListingDetailPage from './pages/ListingDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ChatPage from './pages/ChatPage';
import ChatConversationPage from './pages/ChatConversationPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/profile" component={UserProfilePage} />
                <Route path="/my-listings" component={MyListingsPage} />
                <Route path="/create-edit-listing" component={CreateEditListingPage} />
                <Route path="/listing/:id" component={ListingDetailPage} />
                <Route path="/search" component={SearchResultsPage} />
                <Route path="/chat" component={ChatPage} />
                <Route path="/chat/:id" component={ChatConversationPage} />
            </Switch>
        </Router>
    );
};

export default App;

// This component sets up the routing for the application using React Router.
