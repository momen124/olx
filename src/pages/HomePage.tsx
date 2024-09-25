// HomePage.js
import React from "react";
import Header from "../components/layout/Header"; // Import the Header component
import Footer from "../components/layout/Footer"; // Import the Footer component
import HeroSection from "../components/hero/HeroSection"; // Import Hero Section
import CategoriesSection from "../components/categories/CategoriesSection"; // Import Categories Section
// import BrowseCategories from "../components/categories/BrowseCategories"; // Import Browse Categories Section

const HomePage = () => {
    return (
        <div className="bg-gray-100 font-sans"> {/* Background and font styling */}
            <Header /> {/* Render the Header component */}

            <main className="container mx-auto px-4 py-8"> {/* Main content wrapper */}
                <h1 className="text-3xl font-bold mb-6">Home</h1>

                {/* Hero Section */}
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <HeroSection /> {/* Display the Hero Section */}
                </section>

                {/* Categories Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                    <CategoriesSection /> {/* Display the Categories Section */}
                </section>

                {/* Browse Categories Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300">
                                <div className="p-4">
    {/* If this listing is iPhone 12, show the specific details */}
    {index === 1 ? (
        <h3 className="font-semibold text-lg mb-2">iPhone 12</h3>
    ) : (
        <h3 className="font-semibold text-lg mb-2">Listing Title {index}</h3>
    )}
    
    <p className="text-gray-600 font-bold">${(index * 100) + 99}</p>
    <p className="text-sm text-gray-500 mb-2">New York, NY</p>
    
    {/* If this is iPhone 12, change the link */}
    {index === 1 ? (
        <a href={`/listing/iphone-12`} className="text-blue-500 hover:underline">View iPhone 12 Details</a>
    ) : (
        <a href={`/listing/${index + 3}`} className="text-blue-500 hover:underline">View Details</a>
    )}
</div>

                                <img src={`https://picsum.photos/400/300?random=${index + 3}`} alt={`Listing ${index}`} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">Electronics {index}</h3>
                                    <p className="text-gray-600 font-bold">${(index * 100) + 99}</p>
                                    <p className="text-sm text-gray-500 mb-2">New York, NY</p>
                                    <a href={`/listing/${index + 3}`} className="text-blue-500 hover:underline">View Details</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </section>
            </main>

            <Footer /> {/* Render the Footer component */}
        </div>
    );
};

export default HomePage;
