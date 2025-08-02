import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const BestCity = () => {
  // State to toggle between showing more or fewer cities
  const [showMore, setShowMore] = useState(false);

  // Cities shown initially
  const initialCities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune",
    "Kolkata", "Chennai", "Ahmedabad", "Chandigarh", "Prayagraj"
  ];

  // Cities shown when "Show More" is clicked
  const moreCities = [
    "Noida", "Ghaziabad", "Faridabad", "Jodhpur", "Raipur", "Guwahati",
    "Jammu", "Tirupati", "Trichy", "Kochi", "Kozhikode", "Madurai",
    "Salem", "Nellore", "Kakinada", "Warangal", "Anand", "Nashik",
    "Rajkot", "Siliguri", "Dhanbad", "Jabalpur", "Meerut", "Rohtak",
    "Jamnagar", "Aurangabad", "Vasai", "Kalyan", "Thane", "Navi Mumbai",
    "Solapur", "Kota", "Bhilai", "Bilaspur", "Ambala", "Panipat",
    "Kurukshetra", "Roorkee", "Muzaffarpur", "Durgapur", "Asansol", "Sambalpur"
  ];

  // Render a single city link as a styled anchor tag
  const renderCityLink = (city) => (
    <a
      key={city}
      href={`https://www.swiggy.com/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
      className="border rounded-lg cursor-pointer flex items-center justify-center font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200"
    >
      Order food online in {city}
    </a>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-8">
      <div className="my-20">
        {/* Heading */}
        <h2 className="text-[26px] font-bold mb-6">
          Best Places to Eat Across Cities
        </h2>

        {/* Grid of city links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {initialCities.map(renderCityLink)}
          {showMore && moreCities.map(renderCityLink)}
        </div>

        {/* Toggle Button: Show More / Show Less */}
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
