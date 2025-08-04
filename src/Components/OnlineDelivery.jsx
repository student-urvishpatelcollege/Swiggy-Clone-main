import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import topRestaurants from '../data/topRestaurants.json';
import Card from './Card';

const OnlineDelivery = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setRestaurants(topRestaurants);
  }, []);

  const toggleShowMore = () => {
    setExpanded((prev) => !prev);
    setVisibleCount(expanded ? 12 : restaurants.length);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2 py-6">
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[26px] font-bold text-gray-800">
          Restaurants with online food delivery in Gandhinagar
        </h2>
      </div>

      {/* Restaurant Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {restaurants.slice(0, visibleCount).map((restaurant, index) => (
          <Card key={restaurant.id || index} {...restaurant} />
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {restaurants.length > 12 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowMore}
            className="border rounded-lg flex items-center justify-center font-medium text-orange-600 px-6 py-3 hover:text-orange-700 transition duration-200"
          >
            {expanded ? 'Show Less' : 'Show More'}
            {expanded ? (
              <IoIosArrowUp className="ml-2 text-orange-600" />
            ) : (
              <IoIosArrowDown className="ml-2 text-orange-600" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default OnlineDelivery;
