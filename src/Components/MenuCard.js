import React, { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems, foodselected, searchTerm = '', priceRange = 'all', rating = 0 }) {
  const [isOpen, setIsOpen] = useState(true);

  // This part handles nested categories (e.g., a category that contains other categories)
  if ("categories" in menuItems) {
    return (
      <div className="w-full mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{menuItems.title}</h2>
        <div className="space-y-6">
          {menuItems?.categories?.map((items) => (
            <MenuCard 
              key={items?.title} 
              menuItems={items} 
              foodselected={foodselected}
              searchTerm={searchTerm}
              priceRange={priceRange}
              rating={rating}
            />
          ))}
        </div>
      </div>
    );
  }

  // Get total items count (before filtering)
  const getTotalItemsCount = () => {
    return menuItems?.itemCards?.length || 0;
  };

  // Determine which items to display based on all filters
  let itemsToDisplay = [];
  if (menuItems?.itemCards) {
    itemsToDisplay = menuItems.itemCards.filter((food) => {
      const foodInfo = food?.card?.info;
      if (!foodInfo) return false;

      // Food type filter (veg/non-veg)
      if (foodselected === 'veg') {
        if (!foodInfo.isVeg) return false;
      } else if (foodselected === 'nonveg') {
        if (foodInfo.isVeg) return false;
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          foodInfo.name?.toLowerCase().includes(searchLower) ||
          foodInfo.description?.toLowerCase().includes(searchLower) ||
          foodInfo.category?.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Price range filter
      if (priceRange !== 'all') {
        const price = foodInfo.defaultPrice || foodInfo.price;
        const priceInRupees = price / 100;
        
        switch (priceRange) {
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
      if (rating > 0) {
        const itemRating = foodInfo.ratings?.aggregatedRating?.rating;
        // Check if item has a rating and if it meets the minimum requirement
        if (!itemRating || parseFloat(itemRating) < rating) {
          return false;
        }
      }

      return true;
    });
  }

  // Get filtered items count
  const getFilteredItemsCount = () => {
    return itemsToDisplay.length;
  };

  // Get total items count
  const totalItems = getTotalItemsCount();
  const filteredItems = getFilteredItemsCount();

  // Don't render the category if it has no items after filtering
  if (filteredItems === 0) {
    return null;
  }

  // This is the main component for a single menu section (e.g., "Recommended")
  return (
    <div className="w-full bg-gray-50 rounded-xl mb-4 p-1">
      {/* Header section to toggle visibility */}
      <div
        className="flex justify-between items-center w-full cursor-pointer p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-gray-700">
            {menuItems.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {filteredItems === totalItems ? (
              `${totalItems} items`
            ) : (
              `${filteredItems} of ${totalItems} items`
            )}
          </p>
        </div>
        <button className="text-2xl font-bold text-gray-600 transform transition-transform duration-300 cursor-pointer">
           {isOpen ? '▲' : '▼'}
        </button>
      </div>

      {/* Collapsible content with the list of food items */}
      {isOpen && (
        <div className="pb-2 px-2">
            {
                itemsToDisplay.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info}></RestInfo>)
            }
        </div>
      )}
    </div>
  );
}
