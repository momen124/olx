
import React from 'react';

const RegisterPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100"> {/* Main container with full height and background color */}
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-[#004d61] p-4"> {/* Navbar styling */}
                <div className="logo">
                    <a href="/" className="text-[#ffcc29] text-3xl font-bold">Dubizzle Clone</a> {/* Logo link */}
                </div>
                <ul className="nav-links flex gap-6"> {/* Navigation links */}
                    <li><a href="index.html" className="text-white text-lg">Home</a></li>
                    <li><a href="login.html" className="text-white text-lg">Login</a></li>
                    <li><a href="register.html" className="text-white text-lg">Register</a></li>
                    <li><a href="#profile" className="text-white text-lg">Profile</a></li>
                </ul>
            </nav>

            {/* Register Section */}
            <section id="register" className="flex-grow flex flex-col items-center justify-center"> {/* Register section styling */}
                <h1 className="text-4xl mb-6">Create a New Account</h1> {/* Heading for register section */}
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg"> {/* Form container styling */}
                    {/* Registration form with schema markup */}
                    <form action="/register" method="post" itemScope itemType="https://schema.org/RegisterAction">
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username" 
                            required 
                            itemProp="username" 
                            className="p-3 border-3 border-[#004d61] rounded-md w-full mb-4" /> {/* Username input styling */}
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            itemProp="email" 
                            className="p-3 border-3 border-[#004d61] rounded-md w-full mb-4" /> {/* Email input styling */}
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                            itemProp="password" 
                            className="p-3 border-3 border-[#004d61] rounded-md w-full mb-4" /> {/* Password input styling */}
                        <button 
                            type="submit" 
                            className="w-full bg-[#004d61] text-white py-3 rounded-md hover:bg-[#003846]">Register</button> {/* Submit button styling */}
                    </form>
                    <p className="my-4 text-center">Or sign up with:</p> {/* Alternative sign up options */}
                    <div className="flex justify-center space-x-4"> {/* Social login buttons */}
                        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Register with Google</button> {/* Google register button */}
                        <button className="bg-gray-300 p-2 rounded-md hover:bg-gray-400">Register with Facebook</button> {/* Facebook register button */}
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

export default RegisterPage; // Export the RegisterPage component
