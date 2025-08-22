import React, { useState } from "react";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

// A small helper component for the star rating icon
const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
);

// Veg/Non-veg icon component (same as checkout page)
const VegStatusIcon = ({ isVeg }) => (
    <div className={`w-4 h-4 border ${isVeg ? 'border-green-600' : 'border-red-600'} flex items-center justify-center mr-2`}>
        <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`}></div>
    </div>
);


export default function RestInfo({ restData }) {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cartslice.items);

    const element = items.find(item => item.id === restData.id);
    const count = element ? element.quantity : 0;

    function handleAdditems() {
        dispatch(addItems(restData));
    }

    function handleIncrementItems() {
        dispatch(IncrementItems(restData));
    }

    function handleDecrementItems() {
        dispatch(DecrementItems(restData));
    }

    const rating = restData?.ratings?.aggregatedRating?.rating;
    const ratingCount = restData?.ratings?.aggregatedRating?.ratingCountV2;

    return (
        // Main container with a bottom border instead of <hr>
        <div className="flex w-full justify-between py-6 border-b border-gray-200">
            {/* Left side: Item details */}
            <div className="flex flex-col w-[65%]">
                <div className="flex items-center mb-1">
                    <VegStatusIcon isVeg={restData?.isVeg} />
                    <h3 className="text-lg font-bold text-gray-800">{restData?.name}</h3>
                </div>
                <p className="text-md font-semibold text-gray-700">
                    {"₹" + (restData?.defaultPrice || restData?.price) / 100}
                </p>
                {/* Rating section with star icon */}
                {rating && (
                    <div className="flex items-center my-2">
                        <span className={`flex items-center font-bold text-sm ${rating >= 4.0 ? 'text-green-600' : 'text-orange-500'}`}>
                           <StarIcon /> {rating}
                        </span>
                        <span className="text-gray-500 text-sm ml-2">({ratingCount})</span>
                    </div>
                )}
                <p className="text-gray-500 text-sm mt-1">
                    {restData?.description}
                </p>
            </div>

            {/* Right side: Image and Add Button */}
            <div className="w-[25%] relative flex justify-center">
                {restData.imageId && (
                     <img className="w-40 h-32 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId} alt={restData.name} />
                )}
                {/* Modern Add/Quantity Button */}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2">
                    {count === 0 ? (
                        <button 
                            className="bg-white text-green-600 font-extrabold text-lg px-8 py-2 rounded-lg shadow-lg border border-gray-300 hover:bg-gray-50 transition-transform transform hover:scale-105 cursor-pointer" 
                            onClick={handleAdditems}
                        >
                            ADD
                        </button>
                    ) : (
                        <div className="flex items-center justify-between bg-white text-green-600 font-bold text-lg rounded-lg shadow-lg border border-gray-300 w-28">
                            <button onClick={handleDecrementItems} className="px-3 py-2 hover:bg-gray-100 rounded-l-lg cursor-pointer">-</button>
                            <span className="px-3 py-2">{count}</span>
                            <button onClick={handleIncrementItems} className="px-3 py-2 hover:bg-gray-100 rounded-r-lg cursor-pointer">+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
