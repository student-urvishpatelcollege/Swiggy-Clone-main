import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// List of all cities that support grocery delivery
const allCities = [
  "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai", "Pune", "Kolkata",
  "Chennai", "Ahmedabad", "Chandigarh", "Prayagraj", "Noida", "Ghaziabad",
  "Faridabad", "Jodhpur", "Raipur", "Guwahati", "Jammu", "Tirupati", "Trichy",
  "Kochi", "Kozhikode", "Madurai", "Salem", "Nellore", "Kakinada", "Warangal",
  "Anand", "Nashik", "Rajkot", "Siliguri", "Dhanbad", "Jabalpur", "Meerut",
  "Rohtak", "Jamnagar", "Aurangabad", "Vasai", "Kalyan", "Thane", "Navi Mumbai",
  "Solapur", "Kota", "Bhilai", "Bilaspur", "Ambala", "Panipat", "Kurukshetra",
  "Roorkee", "Muzaffarpur", "Durgapur", "Asansol", "Sambalpur"
];

const DeliveryCity = () => {
  const [showMore, setShowMore] = useState(false);

  // Decide how many cities to show initially
  const visibleCities = showMore ? allCities : allCities.slice(0, 11);

  return (
    <div className='max-w-[1200px] mx-auto px-2 mb-8'>
      {/* Section Heading */}
      <div className='my-20'>
        <h2 className='text-[26px] font-bold mb-6'>Cities with grocery delivery</h2>

        {/* Grid of city links */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {visibleCities.map((city) => (
            <a
              key={city}
              href={`https://www.swiggy.com/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className='border rounded-lg cursor-pointer flex items-center justify-center font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200'
            >
              Order food online in {city}
            </a>
          ))}

          {/* Show More / Show Less Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className='border rounded-lg cursor-pointer flex items-center justify-center font-medium text-orange-600 p-4 hover:text-orange-700 transition duration-200'
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? (
              <IoIosArrowUp className='ml-2 text-orange-600' />
            ) : (
              <IoIosArrowDown className='ml-2 text-orange-600' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCity;
