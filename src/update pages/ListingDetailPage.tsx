import React from 'react';

const ListingDetailPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Navbar */}
            <header>
                <nav className="bg-gray-800 text-white py-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold ml-4">My Website</h1> {/* Website title */}
                        <ul className="flex space-x-6 mr-4">
                            <li><a href="/" className="hover:text-blue-500">Home</a></li>
                            <li><a href="/listings" className="hover:text-blue-500">Listings</a></li>
                            <li><a href="/profile" className="hover:text-blue-500">Profile</a></li>
                            <li><a href="/logout" className="hover:text-blue-500">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg">
                <section className="listing-detail">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Listing Title Here</h2>
                    <img src="listing-image.jpg" alt="Listing Image" className="w-full h-auto rounded-md mb-6" /> {/* Placeholder for listing image */}
                    <p className="text-gray-700 mb-4"><strong>Description:</strong> This is where the detailed description of the listing goes. It should provide comprehensive information about the listing, including features, specifications, and other relevant details.</p>
                    <p className="text-gray-700 mb-4"><strong>Price:</strong> $1000</p> {/* Placeholder for price */}
                    <p className="text-gray-700 mb-4"><strong>Category:</strong> Electronics</p> {/* Placeholder for category */}
                    <p className="text-gray-700"><strong>Contact:</strong> johndoe@example.com</p> {/* Placeholder for contact information */}
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; 2024 My Website. All rights reserved.</p> {/* Footer content */}
            </footer>
        </div>
    );
};

export default ListingDetailPage;
