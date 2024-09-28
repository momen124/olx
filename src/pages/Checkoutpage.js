// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import './CheckoutPage.css'; // Ensure to have a CSS file for styling

const CheckoutPage = () => {
    // State to store shipping address information
    const [shippingAddress, setShippingAddress] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
    });

    // State to store payment information
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    // Handle changes in shipping address fields
    const handleShippingChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    // Handle changes in payment information fields
    const handlePaymentChange = (e) => {
        setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
    };

    // Function to handle placing the order
    const handlePlaceOrder = () => {
        // Here you can add the logic to process the order
        console.log('Order placed:', { shippingAddress, paymentInfo });
    };

    return (
        <div className="checkout-container">
            <div className="section shipping-address">
                <h2>Shipping Address</h2>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleShippingChange} />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleShippingChange} />
                <input type="text" name="address" placeholder="Address" onChange={handleShippingChange} />
                <input type="text" name="city" placeholder="City" onChange={handleShippingChange} />
                <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleShippingChange} />
            </div>

            <div className="section payment-info">
                <h2>Payment Information</h2>
                <input type="text" name="cardNumber" placeholder="Card Number" onChange={handlePaymentChange} />
                <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handlePaymentChange} />
                <input type="text" name="cvv" placeholder="CVV" onChange={handlePaymentChange} />
            </div>

            <div className="section order-summary">
                <h2>Order Summary</h2>
                <div className="summary-item">
                    <span>Subtotal</span>
                    <span>$399</span>
                </div>
                <div className="summary-item">
                    <span>Shipping</span>
                    <span>$10</span>
                </div>
                <div className="summary-item">
                    <span>Tax</span>
                    <span>$29.90</span>
                </div>
                <div className="summary-total">
                    <span>Total</span>
                    <span>$438.90</span>
                </div>
            </div>

            <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
        </div>
    );
};

export default CheckoutPage;
