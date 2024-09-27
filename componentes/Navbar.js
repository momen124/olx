// src/components/layout/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Logo</Link>
            <input type="text" placeholder="search..." />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to ="/profile">profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

// This component creates a navigation bar with links to Home, Login, Register, and profile pages.
