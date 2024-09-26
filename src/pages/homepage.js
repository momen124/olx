import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/hero/HeroSection";
import CategoriesSection from "../components/categories/CategoriesSection";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    return (
        <div className="bg-gray-100 font-sans">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <HeroSection />
                <CategoriesSection />
                
                {/* Browse Categories Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Default items */}
                        {[
                            { title: "iPhone 12", price: "$999", location: "New York, NY", id: 1 },
                            { title: "Samsung Galaxy", price: "$899", location: "New York, NY", id: 2 },
                            { title: "Toyota Car", price: "$800", location: "New York, NY", id: 3 },
                        ].map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300">
                                <img src={`https://picsum.photos/400/300?random=${item.id + 3}`} alt={`Category ${item.id}`} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600 font-bold">{item.price}</p>
                                    <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                                    <a href={`/listing/${item.id}`} className="text-blue-500 hover:underline">{item.title}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Additional sections like Featured Listings or How It Works can be added here if needed */}
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
