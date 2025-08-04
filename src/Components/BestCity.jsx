import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion'; // Optional animation

const BestCity = () => {
  const [showMore, setShowMore] = useState(false);

  const initialCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune",
    "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Prayagraj"
  ];

  const moreCities = [
    "Noida", "Ghaziabad", "Faridabad", "Jodhpur", "Raipur", "Guwahati",
    "Jammu", "Tirupati", "Trichy", "Kochi", "Kozhikode", "Madurai",
    "Salem", "Nellore", "Kakinada", "Warangal", "Anand", "Nashik",
    "Rajkot", "Siliguri", "Dhanbad", "Jabalpur", "Meerut", "Rohtak",
    "Jamnagar", "Aurangabad", "Vasai", "Kalyan", "Thane", "Navi Mumbai",
    "Solapur", "Kota", "Bhilai", "Bilaspur", "Ambala", "Panipat",
    "Kurukshetra", "Roorkee", "Muzaffarpur", "Durgapur", "Asansol", "Sambalpur"
  ];

  const renderCityLink = (city) => (
    <a
      key={city}
      href={`https://www.swiggy.com/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg cursor-pointer flex items-center justify-center font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200"
    >
      Order food online in {city}
    </a>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-8">
      <div className="my-20">
        <h2 className="text-[26px] font-bold mb-6">
          Best Places to Eat Across Cities
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {initialCities.map(renderCityLink)}
        </div>

        {/* Animated moreCities list */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6"
            >
              {moreCities.map(renderCityLink)}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="border rounded-lg flex items-center justify-center font-medium text-orange-600 px-6 py-3 hover:text-orange-700 transition duration-200"
          >
            {showMore ? 'Show Less' : 'Show More'}
            {showMore ? (
              <IoIosArrowUp className="ml-2 text-orange-600" />
            ) : (
              <IoIosArrowDown className="ml-2 text-orange-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCity;
