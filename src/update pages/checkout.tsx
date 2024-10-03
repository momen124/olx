import React from 'react';

// Checkout Page Component
const CheckoutPage: React.FC = () => {
    return (
        <div className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg shadow-lg bg-white"> {/* Container for checkout page */}
            {/* User Information Section */}
            <div className="mb-5"> {/* Section for user information */}
                <h2 className="text-2xl mb-2 text-gray-800">User Information</h2> {/* Heading for user information */}
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
            </div>

            {/* Shipping Details Section */}
            <div className="mb-5"> {/* Section for shipping details */}
                <h2 className="text-2xl mb-2 text-gray-800">Shipping Details</h2> {/* Heading for shipping details */}
                <input 
                    type="text" 
                    placeholder="Address Line 1" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="Address Line 2" 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="City" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="State/Province" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="Zip/Postal Code" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
            </div>

            {/* Payment Details Section */}
            <div className="mb-5"> {/* Section for payment details */}
                <h2 className="text-2xl mb-2 text-gray-800">Payment Details</h2> {/* Heading for payment details */}
                <input 
                    type="text" 
                    placeholder="Credit Card Number" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="Expiration Date (MM/YY)" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
                <input 
                    type="text" 
                    placeholder="CVV" 
                    required 
                    className="block w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" // Input styles
                />
            </div>

            {/* Order Summary Section */}
            <div className="mb-5 border-t border-gray-300 pt-4"> {/* Section for order summary */}
                <h2 className="text-2xl mb-2 text-gray-800">Order Summary</h2> {/* Heading for order summary */}
                <div className="flex justify-between py-2"> {/* Summary item */}
                    <span>Item 1</span>
                    <span>$10.00</span>
                </div>
                <div className="flex justify-between py-2"> {/* Summary item */}
                    <span>Item 2</span>
                    <span>$20.00</span>
                </div>
                <div className="flex justify-between font-bold py-2"> {/* Total summary */}
                    <span>Total:</span>
                    <span>$30.00</span>
                </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"> {/* Button to place the order */}
                Place Order
            </button>
        </div>
    );
};

export default CheckoutPage; // Export the component
