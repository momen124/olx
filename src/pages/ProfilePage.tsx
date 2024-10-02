import React from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Image from 'next/image';

const Profile = () => {



    return (
        <div className="bg-gray-100 font-sans">
            <Header /> 

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Profile</h1>
                <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <Image src="https://picsum.photos/200/200?random=profile" alt="User profile" className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-6" />
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold mb-2">John Doe</h2>
                            <p className="text-gray-600 mb-2">New York, NY</p>
                            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Edit Profile</button>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">My Listings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((index) => (
                            <div key={index} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition duration-300">
                                <Image src={`https://picsum.photos/400/300?random=${index + 3}`} alt={`Listing ${index}`} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg mb-2">Listing Title {index}</h3>
                                    <p className="text-gray-600 font-bold">${(index * 100) + 99}</p>
                                    <p className="text-sm text-gray-500 mb-2">New York, NY</p>
                                    <a href={`/listing/${index + 3}`} className="text-blue-500 hover:underline">View Details</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer /> {/* Use your Footer component */}
        </div>
    );
};

export default Profile;
