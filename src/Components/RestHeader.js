import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

// A small, self-contained SVG component for the cart icon
const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.823-6.841a1.125 1.125 0 0 0-.11-1.152l-1.106-1.992a1.125 1.125 0 0 0-1.007-.568H6.31M7.5 14.25L5.106 5.165m0 0a1.5 1.5 0 0 1 1.5-1.5h2.25a1.5 1.5 0 0 1 1.5 1.5v2.25a1.5 1.5 0 0 1-1.5 1.5h-2.25a1.5 1.5 0 0 1-1.5-1.5v-2.25Z" />
    </svg>
);

export default function RestHeader() {
    // Your existing Redux logic - unchanged
    const counter = useSelector(state => state.cartslice.count);
    
    return (
        // Modern header: white background with a subtle shadow, sticky to the top
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container w-[80%] mx-auto flex justify-between items-center h-20">
                
                {/* Swiggy Text Logo - Restored to your original code */}
                <div>
                    <p className="text-orange-600 font-bold text-4xl">Swiggy</p>
                </div>

                {/* Cart Section */}
                <div>
                    <Link to="/Checkout" className="relative flex items-center text-gray-700 hover:text-orange-500 transition-colors font-semibold">
                        <CartIcon />
                        <span className="ml-2 text-lg">Cart</span>
                        
                        {/* Badge with item count, only shows if cart is not empty */}
                        {counter > 0 && (
                            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                {counter}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
