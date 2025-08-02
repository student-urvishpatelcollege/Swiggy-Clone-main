import React from 'react';

const ExploreRestaurants = () => {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto px-2 mb-8 justify-start items-start">
      
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left w-full">
        Explore Every Restaurant Near Me
      </h2>

      {/* Buttons: Explore Nearby & Top Rated Restaurants */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Explore Nearby Restaurants */}
        <button
          className="px-6 py-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition w-full md:w-auto"
        >
          Explore Restaurants Near Me
        </button>

        {/* Explore Top Rated Restaurants */}
        <button
          className="px-6 py-3 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition w-full md:w-auto text-center"
        >
          Explore Top Rated <br className="hidden md:inline" />
          Restaurants Near Me
        </button>
      </div>
    </div>
  );
};

export default ExploreRestaurants;
