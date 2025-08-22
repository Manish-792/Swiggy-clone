// Shimmer.js (Improved)

/**
 * ShimmerCard Component
 * This represents a single placeholder card. By making it a separate component,
 * we can easily reuse it and keep our main component clean.
 */
const ShimmerCard = () => {
  return (
    // The card container needs 'relative' and 'overflow-hidden' for the animation to work correctly.
    <div className="relative w-[280px] p-4 mb-2 overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
      {/* Image Placeholder */}
      <div className="w-full h-44 bg-gray-300 rounded-lg"></div>
      
      {/* Text Placeholder */}
      <div className="mt-4">
        <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 mt-3 bg-gray-300 rounded"></div>
        <div className="w-5/6 h-4 mt-2 bg-gray-300 rounded"></div>
      </div>

      {/* This is the element that creates the actual shimmer effect.
          It uses the '.shimmer-animation' class from your CSS file. */}
      <div className="shimmer-animation"></div>
    </div>
  );
};


/**
 * Shimmer Component (Main Export)
 * This component creates the grid layout and renders multiple ShimmerCard components using a loop.
 */
export default function Shimmer() {
  return (
    // EDIT: Changed max-w-6xl to max-w-7xl to allow enough space for 4 cards per row.
    <div className="flex flex-wrap justify-center w-full max-w-7xl gap-6 mx-auto mt-12">
      {/* This is a clean way to render a component multiple times.
        - `Array.from({ length: 12 })` creates an array with 12 empty slots.
        - `.map((_, index) => ...)` then loops over each slot.
        - `key={index}` is important for React to keep track of each item in the list.
        You can easily change the number of shimmer cards by changing `{ length: 12 }`.
      */}
      {Array.from({ length: 12 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
}
