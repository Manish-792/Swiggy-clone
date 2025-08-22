import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { IncrementItems, DecrementItems, clearCart } from "../Stored/CartSlicer.js";

// --- SVG ICONS FOR HEADER ---
const HelpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

// A small helper component for the veg/non-veg icon
const VegStatusIcon = ({ isVeg }) => (
    <div className={`w-5 h-5 border ${isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
        <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
    </div>
);

export default function Checkout() {
    const items = useSelector(state => state.cartslice.items);
    const dispatch = useDispatch();
    
    // State for checkout flow
    const [currentStep, setCurrentStep] = useState(1); // 1: Order Review, 2: Delivery Details, 3: Payment
    const [deliveryDetails, setDeliveryDetails] = useState({
        name: '',
        phone: '',
        address: '',
        instructions: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('online');
    const [isProcessing, setIsProcessing] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Calculate the total bill
    const subtotal = items.reduce((total, item) => {
        const price = (item.price || item.defaultPrice) / 100;
        return total + (price * item.quantity);
    }, 0);

    // Mock delivery fee and taxes for UI purposes
    const deliveryFee = subtotal > 500 ? 0 : 35; // Free delivery above ₹500
    const taxes = subtotal * 0.05; // 5% GST
    const total = subtotal + deliveryFee + taxes;

    // Handle delivery details update
    const handleDeliveryChange = (field, value) => {
        setDeliveryDetails(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Handle payment processing
    const handlePayment = async () => {
        setIsProcessing(true);
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsProcessing(false);
        setOrderPlaced(true);
        dispatch(clearCart()); // Clear cart after successful order
    };

    if (items.length === 0 && !orderPlaced) {
        return (
            <div className="bg-gray-100 min-h-screen font-sans">
                <div className="container mx-auto mt-10 p-4 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                        <div className="text-6xl mb-4">🛒</div>
                        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                        <button 
                            onClick={() => window.history.back()}
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (orderPlaced) {
        return (
            <div className="bg-gray-100 min-h-screen font-sans">
                <div className="container mx-auto mt-10 p-4 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                        <div className="text-6xl mb-4">✅</div>
                        <h1 className="text-2xl font-bold mb-4 text-green-600">Order Placed Successfully!</h1>
                        <p className="text-gray-500 mb-6">Your order has been confirmed and will be delivered soon.</p>
                        <div className="bg-gray-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-600">Order ID: <span className="font-semibold">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
                            <p className="text-sm text-gray-600">Estimated Delivery: <span className="font-semibold">25-35 minutes</span></p>
                        </div>
                        <button 
                            onClick={() => window.location.href = '/'}
                            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <img src="https://i.pinimg.com/1200x/d6/1e/84/d61e847019cb5be3f074b170f24af627.jpg" alt="Swiggy Logo" className="w-10 h-10 object-contain rounded-full" />
                        <h1 className="text-lg font-bold text-gray-800 tracking-wider">SECURE CHECKOUT</h1>
                    </div>
                    <div className="flex items-center space-x-6 text-gray-700 font-semibold">
                        <button className="flex items-center hover:text-orange-500 transition-colors">
                            <HelpIcon />
                            <span>Help</span>
                        </button>
                        <button className="flex items-center hover:text-orange-500 transition-colors">
                            <UserIcon />
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Progress Steps */}
            <div className="container mx-auto px-4 py-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                1
                            </div>
                            <div className={`ml-2 ${currentStep >= 1 ? 'text-orange-500' : 'text-gray-400'}`}>Order Review</div>
                        </div>
                        <div className={`w-16 h-1 mx-4 ${currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                2
                            </div>
                            <div className={`ml-2 ${currentStep >= 2 ? 'text-orange-500' : 'text-gray-400'}`}>Delivery Details</div>
                        </div>
                        <div className={`w-16 h-1 mx-4 ${currentStep >= 3 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${currentStep >= 3 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                                3
                            </div>
                            <div className={`ml-2 ${currentStep >= 3 ? 'text-orange-500' : 'text-gray-400'}`}>Payment</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {currentStep === 1 && (
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <div className="flex items-center mb-6">
                                        <img 
                                            className="w-16 h-16 object-cover rounded-lg mr-4"
                                            src={"https://media-assets.swiggy.com/swiggy/image/upload/" + items[0].imageId} 
                                            alt="Restaurant"
                                        />
                                        <div>
                                            <h1 className="text-xl font-bold text-gray-800">Your Order</h1>
                                            <p className="text-gray-500">From your selected restaurant</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        {items.map(item => (
                                            <div key={item.id} className="flex items-center">
                                                <VegStatusIcon isVeg={item.isVeg} />
                                                <span className="flex-grow text-md font-semibold text-gray-700 mx-3">{item.name}</span>
                                                <div className="flex items-center justify-between bg-white text-gray-700 font-bold text-md rounded-lg border border-gray-300 w-24 h-9">
                                                    <button onClick={() => dispatch(DecrementItems(item))} className="px-3 py-1 hover:bg-gray-100 rounded-l-lg">-</button>
                                                    <span className="px-3 py-1 text-green-600">{item.quantity}</span>
                                                    <button onClick={() => dispatch(IncrementItems(item))} className="px-3 py-1 hover:bg-gray-100 rounded-r-lg">+</button>
                                                </div>
                                                <span className="w-20 text-right text-gray-600">
                                                    ₹{((item.price || item.defaultPrice) / 100) * item.quantity}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-200 pt-4">
                                        <h2 className="text-xl font-semibold mb-4">Bill Details</h2>
                                        <div className="space-y-2 text-gray-600">
                                            <div className="flex justify-between"><p>Item Total</p><p>₹{subtotal.toFixed(2)}</p></div>
                                            <div className="flex justify-between">
                                                <p>Delivery Fee</p>
                                                <p className={deliveryFee === 0 ? 'text-green-600' : ''}>
                                                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}
                                                </p>
                                            </div>
                                            <div className="flex justify-between"><p>GST & Restaurant Charges</p><p>₹{taxes.toFixed(2)}</p></div>
                                        </div>
                                        <div className="flex justify-between font-bold text-lg text-gray-800 border-t border-gray-300 mt-4 pt-4">
                                            <p>TO PAY</p><p>₹{total.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-xl font-bold mb-6">Delivery Details</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                value={deliveryDetails.name}
                                                onChange={(e) => handleDeliveryChange('name', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={deliveryDetails.phone}
                                                onChange={(e) => handleDeliveryChange('phone', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Address</label>
                                            <textarea
                                                value={deliveryDetails.address}
                                                onChange={(e) => handleDeliveryChange('address', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                rows="3"
                                                placeholder="Enter your complete delivery address"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Instructions (Optional)</label>
                                            <textarea
                                                value={deliveryDetails.instructions}
                                                onChange={(e) => handleDeliveryChange('instructions', e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                rows="2"
                                                placeholder="Any special instructions for delivery"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentStep === 3 && (
                                <div className="bg-white shadow-lg rounded-lg p-6">
                                    <h2 className="text-xl font-bold mb-6">Payment Method</h2>
                                    <div className="space-y-4">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="online"
                                                    checked={paymentMethod === 'online'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="mr-3"
                                                />
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                                                        <span className="text-white text-sm font-bold">₹</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">Online Payment</div>
                                                        <div className="text-sm text-gray-500">Pay securely with cards, UPI, or digital wallets</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="payment"
                                                    value="cod"
                                                    checked={paymentMethod === 'cod'}
                                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                                    className="mr-3"
                                                />
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-3">
                                                        <span className="text-white text-sm font-bold">₹</span>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">Cash on Delivery</div>
                                                        <div className="text-sm text-gray-500">Pay when you receive your order</div>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white shadow-lg rounded-lg p-6 sticky top-4">
                                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                                <div className="space-y-2 text-sm mb-4">
                                    <div className="flex justify-between">
                                        <span>Items ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Delivery</span>
                                        <span className={deliveryFee === 0 ? 'text-green-600' : ''}>
                                            {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Taxes</span>
                                        <span>₹{taxes.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-4 mb-6">
                                    <div className="flex justify-between font-bold text-lg">
                                        <span>Total</span>
                                        <span>₹{total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    {currentStep === 1 && (
                                        <button
                                            onClick={() => setCurrentStep(2)}
                                            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                                        >
                                            Continue to Delivery
                                        </button>
                                    )}
                                    {currentStep === 2 && (
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => setCurrentStep(1)}
                                                className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                                            >
                                                Back to Order
                                            </button>
                                            <button
                                                onClick={() => setCurrentStep(3)}
                                                disabled={!deliveryDetails.name || !deliveryDetails.phone || !deliveryDetails.address}
                                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                                            >
                                                Continue to Payment
                                            </button>
                                        </div>
                                    )}
                                    {currentStep === 3 && (
                                        <div className="space-y-3">
                                            <button
                                                onClick={() => setCurrentStep(2)}
                                                className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                                            >
                                                Back to Delivery
                                            </button>
                                            <button
                                                onClick={handlePayment}
                                                disabled={isProcessing}
                                                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                                            >
                                                {isProcessing ? (
                                                    <div className="flex items-center justify-center">
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                        Processing...
                                                    </div>
                                                ) : (
                                                    `Pay ₹${total.toFixed(2)}`
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Delivery Info */}
                                {currentStep >= 2 && (
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <div className="flex items-center text-sm text-gray-600 mb-2">
                                            <LocationIcon />
                                            <span>Estimated delivery time: 25-35 minutes</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <ClockIcon />
                                            <span>Order will be prepared fresh</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
