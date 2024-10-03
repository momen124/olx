import React from 'react';

// Create/Edit Listing Page Component
const CreateEditListingPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen"> {/* Light background for the whole page */}
            {/* Navbar */}
            <header>
                <nav className="bg-gray-800 text-white py-4"> {/* Dark background for navbar */}
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold ml-4">My Website</h1> {/* Website title */}
                        <ul className="flex space-x-6 mr-4"> {/* Flexbox for horizontal menu */}
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="/listings" className="hover:text-blue-400">Listings</a></li>
                            <li><a href="/profile" className="hover:text-blue-400">Profile</a></li>
                            <li><a href="/logout" className="hover:text-blue-400">Logout</a></li>
                        </ul>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-8 max-w-lg"> {/* Center content with padding and max width */}
                <section className="bg-white shadow-lg rounded-lg p-6"> {/* White background for form section */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Create/Edit Listing</h2>
                    <form action="/submit-listing" method="POST" aria-labelledby="listing-form"> {/* Form for listing */}
                        <div className="mb-4"> {/* Form group */}
                            <label htmlFor="title" className="block font-bold mb-1">Title:</label>
                            <input 
                                type="text" 
                                id="title" 
                                name="title" 
                                placeholder="Listing Title" 
                                required 
                                aria-required="true" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Tailwind CSS for input styling
                            />
                        </div>

                        <div className="mb-4"> {/* Form group */}
                            <label htmlFor="description" className="block font-bold mb-1">Description:</label>
                            <textarea 
                                id="description" 
                                name="description" 
                                placeholder="Listing Description" 
                                required 
                                aria-required="true" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Tailwind CSS for textarea styling
                            />
                        </div>

                        <div className="mb-4"> {/* Form group */}
                            <label htmlFor="price" className="block font-bold mb-1">Price:</label>
                            <input 
                                type="number" 
                                id="price" 
                                name="price" 
                                placeholder="Price" 
                                required 
                                aria-required="true" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Tailwind CSS for input styling
                            />
                        </div>

                        <div className="mb-4"> {/* Form group */}
                            <label htmlFor="category" className="block font-bold mb-1">Category:</label>
                            <select 
                                id="category" 
                                name="category" 
                                required 
                                aria-required="true" 
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Tailwind CSS for select styling
                            >
                                <option value="" disabled selected>Select a category</option> {/* Default option */}
                                <option value="furniture">Furniture</option>
                                <option value="electronics">Electronics</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="real-estate">Real Estate</option>
                            </select>
                        </div>

                        <button 
                            type="submit" 
                            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200" // Tailwind CSS for button styling
                        >
                            Submit Listing
                        </button> {/* Button to submit the form */}
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4"> {/* Dark background for footer */}
                <p>&copy; 2024 My Website. All rights reserved.</p> {/* Footer content */}
            </footer>
        </div>
    );
};

export default CreateEditListingPage; // Export the component
