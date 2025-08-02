import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const BestCuisines = () => {
  // State to store fetched cuisines data
  const [cuisines, setCuisines] = useState([]);

  // State to toggle showing all cuisines vs only first 11
  const [showAll, setShowAll] = useState(false);

  // Fetch cuisines from local JSON when component mounts
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await fetch("api/cuisines.json"); // Local fetch
        const data = await response.json(); // Parse JSON
        setCuisines(data); // Update state
      } catch (error) {
        console.error("Error fetching cuisines:", error);
      }
    };

    fetchCuisines();
  }, []);

  // Determine which cuisines to display based on toggle
  const visibleCuisines = showAll ? cuisines : cuisines.slice(0, 11);

  // Reusable component to render each cuisine link
  const renderCuisineLink = (name) => (
    <a
      key={name}
      href={`https://www.swiggy.com/search?query=${encodeURIComponent(name.replace(" Near Me", ""))}`}
      className="border rounded-lg cursor-pointer flex items-center justify-center font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200"
    >
      {name}
    </a>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-8">
      <div className="my-20">
        {/* Section Title */}
        <h2 className="text-[26px] font-bold mb-6">Best Cuisines Near Me</h2>

        {/* Cuisine Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {visibleCuisines.map(renderCuisineLink)}
        </div>

        {/* Show More / Show Less toggle */}
        {cuisines.length > 11 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="border rounded-lg flex items-center justify-center font-medium text-orange-600 px-6 py-3 hover:text-orange-700 transition duration-200"
            >
              {showAll ? 'Show Less' : 'Show More'}
              {showAll ? (
                <IoIosArrowUp className="ml-2 text-orange-600" />
              ) : (
                <IoIosArrowDown className="ml-2 text-orange-600" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestCuisines;
