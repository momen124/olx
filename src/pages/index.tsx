import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100"> {/* Main container with full height and background color */}
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-[#004d61] p-4"> {/* Navbar styling */}
                <div className="logo">
                    <a href="home.html" className="text-[#ffcc29] text-3xl font-bold">Dubizzle Clone</a> {/* Logo styling */}
                </div>
                <ul className="nav-links flex gap-6"> {/* Navigation links */}
                    <li><a href="home.html" className="text-white text-lg">Home</a></li>
                    <li><a href="login.html" className="text-white text-lg">Login</a></li>
                    <li><a href="register.html" className="text-white text-lg">Register</a></li>
                    <li><a href="#profile" className="text-white text-lg">Profile</a></li>
                </ul>
            </nav>

            {/* Home Section */}
            <section className="flex flex-col flex-grow items-center justify-center text-center" id="home"> {/* Home section styling */}
                <h1 className="text-4xl font-semibold">Welcome to Dubizzle Clone</h1> {/* Main heading */}
                
                {/* Search Bar */}
                <div className="my-6"> {/* Margin for spacing */}
                    <input type="text" placeholder="Search listings..." className="p-2 border-4 border-[#004d61] rounded-md w-64" /> {/* Input styling */}
                    <button className="p-2 bg-[#ffcc29] text-[#004d61] rounded-md ml-2 hover:bg-[#f0a500]">Search</button> {/* Button styling */}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#004d61] text-white text-center p-4 mt-auto"> {/* Footer styling */}
                <p>&copy; 2024 Dubizzle Clone. All rights reserved.</p> {/* Footer text */}
                <ul className="footer-links flex justify-center gap-5"> {/* Footer links */}
                    <li><a href="#" className="text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default HomePage; // Export the HomePage component
