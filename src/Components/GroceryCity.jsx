import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

// List of cities with URLs
const cityLinks = [
  { name: "Bangalore", url: "https://www.swiggy.com/city/bangalore" },
  { name: "Gurgaon", url: "https://www.swiggy.com/city/gurgaon" },
  { name: "Hyderabad", url: "https://www.swiggy.com/city/hyderabad" },
  { name: "Delhi", url: "https://www.swiggy.com/city/delhi" },
  { name: "Mumbai", url: "https://www.swiggy.com/city/mumbai" },
  { name: "Pune", url: "https://www.swiggy.com/city/pune" },
  { name: "Kolkata", url: "https://www.swiggy.com/city/kolkata" },
  { name: "Chennai", url: "https://www.swiggy.com/city/chennai" },
  { name: "Ahmedabad", url: "https://www.swiggy.com/city/ahmedabad" },
  { name: "Chandigarh", url: "https://www.swiggy.com/city/chandigarh" },
  { name: "Prayagraj", url: "https://www.swiggy.com/city/prayagraj" },
  { name: "Noida", url: "https://www.swiggy.com/city/noida" },
  { name: "Ghaziabad", url: "https://www.swiggy.com/city/ghaziabad" },
  { name: "Faridabad", url: "https://www.swiggy.com/city/faridabad" },
  { name: "Jodhpur", url: "https://www.swiggy.com/city/jodhpur" },
  { name: "Raipur", url: "https://www.swiggy.com/city/raipur" },
  { name: "Guwahati", url: "https://www.swiggy.com/city/guwahati" },
  { name: "Jammu", url: "https://www.swiggy.com/city/jammu" },
  { name: "Tirupati", url: "https://www.swiggy.com/city/tirupati" },
  { name: "Trichy", url: "https://www.swiggy.com/city/trichy" },
  { name: "Kochi", url: "https://www.swiggy.com/city/kochi" },
  { name: "Kozhikode", url: "https://www.swiggy.com/city/kozhikode" },
  { name: "Madurai", url: "https://www.swiggy.com/city/madurai" },
  { name: "Salem", url: "https://www.swiggy.com/city/salem" },
  { name: "Nellore", url: "https://www.swiggy.com/city/nellore" },
  { name: "Kakinada", url: "https://www.swiggy.com/city/kakinada" },
  { name: "Warangal", url: "https://www.swiggy.com/city/warangal" },
  { name: "Anand", url: "https://www.swiggy.com/city/anand" },
  { name: "Nashik", url: "https://www.swiggy.com/city/nashik" },
  { name: "Rajkot", url: "https://www.swiggy.com/city/rajkot" },
  { name: "Siliguri", url: "https://www.swiggy.com/city/siliguri" },
  { name: "Dhanbad", url: "https://www.swiggy.com/city/dhanbad" },
  { name: "Jabalpur", url: "https://www.swiggy.com/city/jabalpur" },
  { name: "Meerut", url: "https://www.swiggy.com/city/meerut" },
  { name: "Rohtak", url: "https://www.swiggy.com/city/rohtak" },
  { name: "Jamnagar", url: "https://www.swiggy.com/city/jamnagar" },
  { name: "Aurangabad", url: "https://www.swiggy.com/city/aurangabad" },
  { name: "Vasai", url: "https://www.swiggy.com/city/vasai" },
  { name: "Kalyan", url: "https://www.swiggy.com/city/kalyan" },
  { name: "Thane", url: "https://www.swiggy.com/city/thane" },
  { name: "Navi Mumbai", url: "https://www.swiggy.com/city/navi-mumbai" },
  { name: "Solapur", url: "https://www.swiggy.com/city/solapur" },
  { name: "Kota", url: "https://www.swiggy.com/city/kota" },
  { name: "Bhilai", url: "https://www.swiggy.com/city/bhilai" },
  { name: "Bilaspur", url: "https://www.swiggy.com/city/bilaspur" },
  { name: "Ambala", url: "https://www.swiggy.com/city/ambala" },
  { name: "Panipat", url: "https://www.swiggy.com/city/panipat" },
  { name: "Kurukshetra", url: "https://www.swiggy.com/city/kurukshetra" },
  { name: "Roorkee", url: "https://www.swiggy.com/city/roorkee" },
  { name: "Muzaffarpur", url: "https://www.swiggy.com/city/muzaffarpur" },
  { name: "Durgapur", url: "https://www.swiggy.com/city/durgapur" },
  { name: "Asansol", url: "https://www.swiggy.com/city/asansol" },
  { name: "Sambalpur", url: "https://www.swiggy.com/city/sambalpur" },
];

const GroceryCity = () => {
  const [showMore, setShowMore] = useState(false);

  const initialCities = cityLinks.slice(0, 10);
  const moreCities = cityLinks.slice(10);

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-8">
      <div className="flex my-5 items-center justify-between mt-[5rem]">
        <h2 className="text-[26px] font-bold">Cities with grocery delivery</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {initialCities.map((city, index) => (
          <a
            key={index}
            href={city.url}
            className="border rounded-lg cursor-pointer flex items-center justify-center
              text-sm font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200"
          >
            Order food online in {city.name}
          </a>
        ))}

        {showMore &&
          moreCities.map((city, index) => (
            <a
              key={index}
              href={city.url}
              className="border rounded-lg cursor-pointer flex items-center justify-center
                text-sm font-medium text-slate-700 p-4 hover:text-blue-500 transition duration-200"
            >
              Order food online in {city.name}
            </a>
          ))}

        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="border rounded-lg cursor-pointer flex items-center justify-center
              text-sm font-medium text-orange-600 p-4 hover:text-orange-700 transition duration-200 col-span-2 md:col-span-4"
          >
            Show More <IoIosArrowDown className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default GroceryCity;
