const ShimmerCard = () => (
    <div className="flex w-full gap-5 p-4 mb-4 bg-white border border-gray-200 rounded-lg overflow-hidden relative animate-pulse">
      <div className="flex-grow">
        <div className="w-3/4 h-6 mb-3 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-4 mb-4 bg-gray-300 rounded"></div>
        <div className="w-full h-3 mb-2 bg-gray-300 rounded"></div>
        <div className="w-5/6 h-3 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-300 rounded-md"></div>
        <div className="w-24 h-8 mt-3 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );

export default function Shimmer2() {
  return (
    <div className="w-[80%] mx-auto animate-pulse">
      {/* Shimmer for Search Bar */}
      <div className="w-full h-16 bg-gray-200 rounded-xl mt-8"></div>

      {/* Shimmer for Veg/Non-Veg Buttons */}
      <div className="w-64 h-12 bg-gray-200 rounded-full mt-8"></div>
      
      {/* Shimmer for Menu Section Header */}
      <div className="w-1/3 h-8 bg-gray-200 rounded mt-12 mb-4"></div>

      {/* Shimmer for Menu Items */}
      <div>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
}
