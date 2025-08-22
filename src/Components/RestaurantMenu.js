import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard"
import { Link } from "react-router";
import Shimmer2 from "./shimmer2";

export default function RestaurantMenu(){
   
    let {id} = useParams();
    const [selected, setSelected] = useState(null);
    const [filters, setFilters] = useState({
        searchTerm: '',
        priceRange: 'all',
        rating: 0
    });
    const [RestData, setRestData] = useState([]);
    console.log(id);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card)
           setRestData(filterData);
        }
   
        fetchData();
       },[])

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            searchTerm: '',
            priceRange: 'all',
            rating: 0
        });
        setSelected(null);
    };

    // Shared filtering function to avoid code duplication
    const applyFilters = (foodInfo) => {
        // Food type filter (veg/non-veg)
        if (selected === 'veg') {
            if (!foodInfo.isVeg) return false;
        } else if (selected === 'nonveg') {
            if (foodInfo.isVeg) return false;
        }

        // Search filter
        if (filters.searchTerm) {
            const searchLower = filters.searchTerm.toLowerCase();
            const matchesSearch = 
                foodInfo.name?.toLowerCase().includes(searchLower) ||
                foodInfo.description?.toLowerCase().includes(searchLower) ||
                foodInfo.category?.toLowerCase().includes(searchLower);
            if (!matchesSearch) return false;
        }

        // Price range filter
        if (filters.priceRange !== 'all') {
            const price = foodInfo.defaultPrice || foodInfo.price;
            const priceInRupees = price / 100;
            
            switch (filters.priceRange) {
                case 'low':
                    if (priceInRupees > 200) return false;
                    break;
                case 'medium':
                    if (priceInRupees <= 200 || priceInRupees > 500) return false;
                    break;
                case 'high':
                    if (priceInRupees <= 500) return false;
                    break;
            }
        }

        // Rating filter
        if (filters.rating > 0) {
            const itemRating = foodInfo.ratings?.aggregatedRating?.rating;
            if (!itemRating || parseFloat(itemRating) < filters.rating) {
                return false;
            }
        }

        return true;
    };

    // Get total item count from all categories
    const getTotalItemCount = () => {
        return RestData.reduce((total, category) => {
            return total + (category?.card?.card?.itemCards?.length || 0);
        }, 0);
    };

    // Get filtered item count across all categories
    const getFilteredItemCount = () => {
        return RestData.reduce((total, category) => {
            const categoryData = category?.card?.card;
            if (!categoryData?.itemCards) return total;
            
            const filteredItems = categoryData.itemCards.filter((food) => {
                const foodInfo = food?.card?.info;
                if (!foodInfo) return false;
                return applyFilters(foodInfo);
            });
            
            return total + filteredItems.length;
        }, 0);
    };

    console.log(RestData);

    if(RestData.length===0)
        return <Shimmer2></Shimmer2>

    return(
        <div className="w-[80%] mx-auto mt-8">
            {/* Filter Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Filter Menu Items</h2>
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
                        placeholder="Search for dishes, descriptions, or categories..."
                        value={filters.searchTerm}
                        onChange={(e) => setFilters({...filters, searchTerm: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {/* Food Type Filter - UI Only */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Food Type
                        </label>
                        <div className="flex items-center p-1 space-x-2 bg-gray-200 rounded-full w-max">
                            <button
                                onClick={() => setSelected(null)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                                    selected === null ? "bg-white text-gray-800 shadow" : "bg-transparent text-gray-500"
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setSelected("veg")}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                                    selected === "veg" ? "bg-white text-green-600 shadow" : "bg-transparent text-gray-500"
                                }`}
                            >
                                Veg
                            </button>
                            <button
                                onClick={() => setSelected("nonveg")}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                                    selected === "nonveg" ? "bg-white text-red-600 shadow" : "bg-transparent text-gray-500"
                                }`}
                            >
                                Non-Veg
                            </button>
                        </div>
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
                            <option value="low">₹0 - ₹200</option>
                            <option value="medium">₹200 - ₹500</option>
                            <option value="high">₹500+</option>
                        </select>
                    </div>

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

                    {/* Search Link */}
                    <div className="flex items-end">
                        <Link to={`/city/delhi/${id}/search`} className="w-full">
                            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                Advanced Search
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Results Count */}
                <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-600">
                        {(() => {
                            const totalItems = getTotalItemCount();
                            const filteredItems = getFilteredItemCount();
                            return filteredItems === totalItems ? 
                                `Total menu items: ${totalItems}` : 
                                `Showing ${filteredItems} of ${totalItems} items`;
                        })()}
                    </p>
                </div>
            </div>

            {/* Menu Items */}
            <div className="mt-8">
                {RestData.length > 0 ? (
                    RestData.map((menuItems) => (
                        <MenuCard 
                            key={menuItems?.card?.card?.title} 
                            menuItems={menuItems?.card?.card} 
                            foodselected={selected}
                            searchTerm={filters.searchTerm}
                            priceRange={filters.priceRange}
                            rating={filters.rating}
                        />
                    ))
                ) : (
                    <div className="w-full text-center py-12">
                        <div className="text-gray-500 text-xl mb-4">No menu items found matching your filters</div>
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
