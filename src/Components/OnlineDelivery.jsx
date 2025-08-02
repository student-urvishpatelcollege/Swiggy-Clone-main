import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import topRestaurants from '../data/topRestaurants.json';
import Card from './Card';

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12); // Show 8 by default
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setData(topRestaurants);
  }, []);

  const toggleShowMore = () => {
    setExpanded(!expanded);
    setVisibleCount(expanded ? 12 : data.length);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[26px] font-bold text-gray-800">
          Restaurants with online food delivery in Gandhinagar
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.slice(0, visibleCount).map((restaurant, i) => (
          <Card key={restaurant.id || i} {...restaurant} />
        ))}
      </div>

      {/* Show More / Less Button */}
      {data.length > 12 && (
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
