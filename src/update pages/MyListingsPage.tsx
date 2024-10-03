import React from 'react';

const ListingsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <header>
                <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My Website</h1>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:bg-blue-500 px-4 py-2 rounded">Home</a></li>
                        <li><a href="/listings" className="hover:bg-blue-500 px-4 py-2 rounded">Listings</a></li>
                        <li><a href="/profile" className="hover:bg-blue-500 px-4 py-2 rounded">Profile</a></li>
                        <li><a href="/logout" className="hover:bg-blue-500 px-4 py-2 rounded">Logout</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-6 py-10 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">My Listings</h2>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Listing Item 1 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center bg-white hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">Listing Title 1</h3>
                        <p className="text-gray-600">Short description of the listing.</p>
                        <p className="text-gray-800 font-bold mt-2">$1000</p>
                        <a href="/listing/1" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View Listing</a>
                    </div>

                    {/* Listing Item 2 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center bg-white hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">Listing Title 2</h3>
                        <p className="text-gray-600">Short description of the listing.</p>
                        <p className="text-gray-800 font-bold mt-2">$2000</p>
                        <a href="/listing/2" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View Listing</a>
                    </div>

                    {/* Listing Item 3 */}
                    <div className="border border-gray-300 rounded-lg p-6 text-center bg-white hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-xl font-semibold mb-2">Listing Title 3</h3>
                        <p className="text-gray-600">Short description of the listing.</p>
                        <p className="text-gray-800 font-bold mt-2">$1500</p>
                        <a href="/listing/3" className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">View Listing</a>
                    </div>

                    {/* Add more listing items as needed */}
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 My Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ListingsPage;
