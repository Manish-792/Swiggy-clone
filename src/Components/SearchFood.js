import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import RestInfo from "./RestInfo";

export default function SearchFood() {
    const { id } = useParams();
    
    // State for the user's search input
    const [searchTerm, setSearchTerm] = useState("");
    // State to hold a flat list of ALL food items from the menu
    const [allItems, setAllItems] = useState([]);
    // State to hold the items that match the search term
    const [filteredItems, setFilteredItems] = useState([]);
    // State to track if data is loading
    const [isLoading, setIsLoading] = useState(true);

    // Step 1: Fetch and process the data once when the component loads
    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            
            try {
                const response = await fetch(proxyServer + swiggyAPI);
                const data = await response.json();
                const menuCategories = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

                // Flatten the nested data to create a single, searchable list of all food items
                let allFoodItems = [];
                if (menuCategories) {
                    menuCategories.forEach(category => {
                        // Add items from the main category
                        if (category?.card?.card?.itemCards) {
                            allFoodItems.push(...category.card.card.itemCards);
                        }
                        // Add items from nested sub-categories
                        if (category?.card?.card?.categories) {
                            category.card.card.categories.forEach(subCategory => {
                                if (subCategory.itemCards) {
                                    allFoodItems.push(...subCategory.itemCards);
                                }
                            });
                        }
                    });
                }
                setAllItems(allFoodItems);
            } catch (error) {
                console.error("Failed to fetch menu data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData();
    }, [id]); // Re-fetch if the restaurant ID changes

    // Step 2: Filter the items whenever the search term changes
    useEffect(() => {
        if (searchTerm.trim() === "") {
            // If the search bar is empty, show no results until the user types something
            setFilteredItems([]);
        } else {
            const filtered = allItems.filter(item => {
                const foodInfo = item?.card?.info;
                if (!foodInfo) return false;
                
                const searchLower = searchTerm.toLowerCase();
                return (
                    foodInfo.name?.toLowerCase().includes(searchLower) ||
                    foodInfo.description?.toLowerCase().includes(searchLower) ||
                    foodInfo.category?.toLowerCase().includes(searchLower)
                );
            });
            setFilteredItems(filtered);
        }
    }, [searchTerm, allItems]);

    // Clear search function
    const clearSearch = () => {
        setSearchTerm("");
    };

    if (isLoading) {
        return (
            <div className="w-[80%] mx-auto mt-10">
                <div className="animate-pulse">
                    <div className="h-16 bg-gray-200 rounded-lg mb-8"></div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-[80%] mx-auto mt-8">
            {/* Header with back button */}
            <div className="flex items-center justify-between mb-8">
                <Link 
                    to={`/city/delhi/${id}`}
                    className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Menu
                </Link>
                <h1 className="text-2xl font-bold text-gray-800">Search Menu</h1>
            </div>

            {/* Enhanced Search Input */}
            <div className="relative mb-8">
                <div className="relative">
                    <input
                        className="w-full pl-12 pr-12 py-4 text-lg bg-white rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 shadow-sm"
                        placeholder="Search for dishes, ingredients, or categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoFocus
                    />
                    {/* Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {/* Clear Button */}
                    {searchTerm && (
                        <button
                            onClick={clearSearch}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Search Results Header */}
            {searchTerm && (
                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Search Results
                        </h2>
                        <div className="text-sm text-gray-500">
                            {filteredItems.length > 0 ? (
                                `${filteredItems.length} item${filteredItems.length === 1 ? '' : 's'} found`
                            ) : (
                                "No items found"
                            )}
                        </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                        Searching for: <span className="font-medium text-orange-600">"{searchTerm}"</span>
                    </div>
                </div>
            )}

            {/* Search Results */}
            <div className="space-y-4">
                {searchTerm && filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={`${item?.card?.info?.id}-${index}`} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
                            <RestInfo restData={item?.card?.info} />
                        </div>
                    ))
                ) : searchTerm ? (
                    // No results found
                    <div className="text-center py-16">
                        <div className="mb-6">
                            <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No dishes found</h3>
                        <p className="text-gray-500 mb-6">
                            We couldn't find any dishes matching <span className="font-medium">"{searchTerm}"</span>
                        </p>
                        <div className="text-sm text-gray-400">
                            Try searching for different keywords or check the spelling
                        </div>
                    </div>
                ) : (
                    // Initial state - no search yet
                    <div className="text-center py-16">
                        <div className="mb-6">
                            <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Search Menu Items</h3>
                        <p className="text-gray-500">
                            Type in the search bar above to find your favorite dishes
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
