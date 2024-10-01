import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100"> {/* Main container with full height and background color */}
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-[#004d61] p-4"> {/* Navbar styling */}
                <div className="logo">
                    <a href="/" className="text-[#ffcc29] text-3xl font-bold">Dubizzle Clone</a> {/* Logo link */}
                </div>
                <ul className="nav-links flex gap-5"> {/* Navigation links */}
                    <li><a href="index.html" className="text-white text-lg">Home</a></li>
                    <li><a href="login.html" className="text-white text-lg">Login</a></li>
                    <li><a href="register.html" className="text-white text-lg">Register</a></li>
                    <li><a href="#profile" className="text-white text-lg">Profile</a></li>
                </ul>
            </nav>

            {/* Login Section */}
            <section id="login" className="flex-grow flex flex-col items-center justify-center"> {/* Login section styling */}
                <h1 className="text-4xl mb-6">Login to Your Account</h1> {/* Heading for login section */}
                <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg"> {/* Form container styling */}
                    {/* Login form with schema markup */}
                    <form action="/login" method="post" itemScope itemType="https://schema.org/LoginAction">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            itemProp="identifier" 
                            className="p-3 border-4 border-[#004d61] rounded-md w-full mb-4" /> {/* Email input styling */}
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                            itemProp="password" 
                            className="p-3 border-4 border-[#004d61] rounded-md w-full mb-4" /> {/* Password input styling */}
                        <button 
                            type="submit" 
                            className="w-full bg-[#004d61] text-white py-3 rounded-md hover:bg-[#003846]">Login</button> {/* Submit button styling */}
                    </form>
                    <p className="my-4 text-center">Or login with:</p> {/* Alternative login options */}
                    <div className="flex justify-center space-x-4"> {/* Social login buttons */}
                        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Login with Google</button> {/* Google login button */}
                        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Login with Facebook</button> {/* Facebook login button */}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#004d61] text-white text-center p-4 mt-auto"> {/* Footer styling */}
                <p>&copy; 2024 Dubizzle Clone. All rights reserved.</p> {/* Copyright notice */}
                <ul className="flex justify-center space-x-5 mt-2"> {/* Footer links */}
                    <li><a href="#" className="text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-white">About</a></li>
                    <li><a href="#" className="text-white">Contact</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default LoginPage; // Export the LoginPage component
