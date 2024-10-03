import React from 'react';

const UserProfile: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <header>
                <nav className="bg-gray-800 text-white shadow-md">
                    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                        <h1 className="text-xl font-semibold">My Website</h1>
                        <ul className="flex space-x-6">
                            <li><a href="/" className="hover:bg-blue-500 px-4 py-2 rounded">Home</a></li>
                            <li><a href="/profile" className="hover:bg-blue-500 px-4 py-2 rounded">Profile</a></li>
                            <li><a href="/settings" className="hover:bg-blue-500 px-4 py-2 rounded">Settings</a></li>
                            <li><a href="/logout" className="hover:bg-blue-500 px-4 py-2 rounded">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-10">
                {/* Profile Card Section */}
                <section className="bg-white p-8 rounded-lg shadow-md text-center max-w-xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">User Profile</h2>
                    <img src="profile-image.jpg" alt="User Profile Image" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg object-cover" />
                    <div className="text-gray-600 mb-6">
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Email:</strong> johndoe@example.com</p>
                        <p><strong>Phone:</strong> (123) 456-7890</p>
                    </div>
                </section>

                {/* Profile Form Section */}
                <section className="bg-white mt-10 p-8 rounded-lg shadow-md max-w-xl mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Profile</h2>
                    <form action="/update-profile" method="POST">
                        <label htmlFor="fullName" className="block text-left text-gray-700 mb-2">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="w-full px-4 py-3 border rounded-lg mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="Full Name"
                            required
                        />

                        <label htmlFor="email" className="block text-left text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 border rounded-lg mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="Email"
                            required
                        />

                        <label htmlFor="phone" className="block text-left text-gray-700 mb-2">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border rounded-lg mb-6 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder="Phone Number"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Update Profile
                        </button>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <div className="container mx-auto">
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default UserProfile;
