import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import topRestaurants from '../data/topRestaurants.json';
import Card from './Card';

const Toprest = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);
  const visibleCards = 4;

  useEffect(() => {
    setData(topRestaurants);
  }, []);

  const nextSlide = () => {
    if (slide + visibleCards < data.length) {
      setSlide(slide + visibleCards);
    }
  };

  const prevSlide = () => {
    setSlide((prev) => Math.max(prev - visibleCards, 0));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Header with navigation buttons */}
      <div className="flex my-5 items-center justify-between">
        <h2 className="text-[26px] font-bold text-gray-800">
          Top restaurant chains in Ahmedabad
        </h2>

        <div className="flex">
          <button
            className="cursor-pointer flex justify-center items-center h-[32px] w-[32px] bg-[#e2e2e7] rounded-full mx-1 transition hover:bg-[#d4d4db] disabled:opacity-50"
            onClick={prevSlide}
            disabled={slide === 0}
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            className="cursor-pointer flex justify-center items-center h-[32px] w-[32px] bg-[#e2e2e7] rounded-full mx-1 transition hover:bg-[#d4d4db] disabled:opacity-50"
            onClick={nextSlide}
            disabled={slide + visibleCards >= data.length}
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex gap-5 overflow-hidden transition-all duration-500 ease-in-out">
        {data.slice(slide, slide + visibleCards).map((restaurant, i) => (
          <Card key={restaurant.id || i} {...restaurant} />
        ))}
      </div>
      <hr className="my-6 border-gray-300" />
    </div>
  );
};

export default Toprest;
