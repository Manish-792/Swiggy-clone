import React from "react";
import { Link } from "react-router"

export default function RestCard({restInfo}){
   
    
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="w-[280px] h-[320px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden group cursor-pointer">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}
                    alt={restInfo?.info?.name}
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Content Container */}
            <div className="p-4 space-y-3">
                {/* Restaurant Name */}
                <div className="font-bold text-lg text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                    {restInfo?.info?.name}
                </div>
                
                {/* Rating and Delivery Time */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full">
                        <svg
                            className="w-4 h-4 fill-green-600"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
                        </svg>
                        <span className="text-sm font-semibold text-green-700">{restInfo?.info?.avgRating}</span>
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                        {restInfo?.info?.sla?.slaString}
                    </div>
                </div>

                {/* Cuisines */}
                <div className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                    {restInfo?.info?.cuisines.join(", ")}
                </div>
                
                {/* Price indicator */}
                <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                        {restInfo?.info?.costForTwoMessage || "₹200 for two"}
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
        </Link>
    )
}