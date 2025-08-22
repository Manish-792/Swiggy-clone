import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [filters, setFilters] = useState({
        rating: 0,
        priceRange: 'all',
        deliveryTime: 'all',
        cuisine: 'all',
        searchTerm: ''
    })

    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://cors-anywhere.herokuapp.com/"
        const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
        const response = await fetch(proxyServer+swiggyAPI);
        const data = await response.json();
        const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestData(restaurants);
        setFilteredData(restaurants);
     }

     fetchData();
    },[])

    // Filter restaurants based on current filters
    useEffect(() => {
        let filtered = [...RestData];

        // Search filter
        if (filters.searchTerm) {
            filtered = filtered.filter(restaurant => 
                restaurant?.info?.name?.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                restaurant?.info?.cuisines?.some(cuisine => 
                    cuisine.toLowerCase().includes(filters.searchTerm.toLowerCase())
                )
            );
        }

        // Rating filter
        if (filters.rating > 0) {
            filtered = filtered.filter(restaurant => 
                restaurant?.info?.avgRating >= filters.rating
            );
        }

        // Price range filter
        if (filters.priceRange !== 'all') {
            filtered = filtered.filter(restaurant => {
                const costForTwo = restaurant?.info?.costForTwo;
                switch (filters.priceRange) {
                    case 'low':
                        return costForTwo <= 400;
                    case 'medium':
                        return costForTwo > 400 && costForTwo <= 800;
                    case 'high':
                        return costForTwo > 800;
                    default:
                        return true;
                }
            });
        }

        // Delivery time filter
        if (filters.deliveryTime !== 'all') {
            filtered = filtered.filter(restaurant => {
                const deliveryTime = restaurant?.info?.sla?.deliveryTime;
                switch (filters.deliveryTime) {
                    case 'fast':
                        return deliveryTime <= 30;
                    case 'medium':
                        return deliveryTime > 30 && deliveryTime <= 45;
                    case 'slow':
                        return deliveryTime > 45;
                    default:
                        return true;
                }
            });
        }

        // Cuisine filter
        if (filters.cuisine !== 'all') {
            filtered = filtered.filter(restaurant => 
                restaurant?.info?.cuisines?.some(cuisine => 
                    cuisine.toLowerCase().includes(filters.cuisine.toLowerCase())
                )
            );
        }

        setFilteredData(filtered);
    }, [RestData, filters]);

    // Get unique cuisines for filter dropdown
    const getUniqueCuisines = () => {
        const cuisines = new Set();
        RestData.forEach(restaurant => {
            restaurant?.info?.cuisines?.forEach(cuisine => {
                cuisines.add(cuisine);
            });
        });
        return Array.from(cuisines).sort();
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            rating: 0,
            priceRange: 'all',
            deliveryTime: 'all',
            cuisine: 'all',
            searchTerm: ''
        });
    };

    // console.log(RestData);
   
    // Shimmer Effect 
    if(RestData.length==0)
        return <Shimmer></Shimmer>

    return (
        <div className="w-[80%] mx-auto mt-20">
            {/* Filter Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Filter Restaurants</h2>
                    <button 
                        onClick={clearFilters}
                        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Clear All Filters
                    </button>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search restaurants or cuisines..."
                        value={filters.searchTerm}
                        onChange={(e) => setFilters({...filters, searchTerm: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Rating Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Minimum Rating
                        </label>
                        <select
                            value={filters.rating}
                            onChange={(e) => setFilters({...filters, rating: Number(e.target.value)})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value={0}>Any Rating</option>
                            <option value={4.5}>4.5+ Stars</option>
                            <option value={4.0}>4.0+ Stars</option>
                            <option value={3.5}>3.5+ Stars</option>
                            <option value={3.0}>3.0+ Stars</option>
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price Range
                        </label>
                        <select
                            value={filters.priceRange}
                            onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="all">All Prices</option>
                            <option value="low">₹0 - ₹400 for two</option>
                            <option value="medium">₹400 - ₹800 for two</option>
                            <option value="high">₹800+ for two</option>
                        </select>
                    </div>

                    {/* Delivery Time Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Delivery Time
                        </label>
                        <select
                            value={filters.deliveryTime}
                            onChange={(e) => setFilters({...filters, deliveryTime: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="all">Any Time</option>
                            <option value="fast">≤ 30 minutes</option>
                            <option value="medium">30-45 minutes</option>
                            <option value="slow">45+ minutes</option>
                        </select>
                    </div>

                    {/* Cuisine Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cuisine Type
                        </label>
                        <select
                            value={filters.cuisine}
                            onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="all">All Cuisines</option>
                            {getUniqueCuisines().map(cuisine => (
                                <option key={cuisine} value={cuisine}>{cuisine}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-gray-600">
                        Showing <span className="font-semibold text-orange-600">{filteredData.length}</span> of <span className="font-semibold">{RestData.length}</span> restaurants
                    </p>
                </div>
            </div>

            {/* Restaurant Cards */}
            <div className="flex flex-wrap gap-5">
                {filteredData.length > 0 ? (
                    filteredData.map((restInfo) => (
                        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
                    ))
                ) : (
                    <div className="w-full text-center py-12">
                        <div className="text-gray-500 text-xl mb-4">No restaurants found matching your filters</div>
                        <button 
                            onClick={clearFilters}
                            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}