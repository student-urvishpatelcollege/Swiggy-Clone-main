import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import categoriesData from '../data/categories';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [slide, setSlide] = useState(0);

  const visibleCards = 6; // How many to show at a time
  const slideStep = 3;     // How many to move per click

  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const maxSlide = Math.max(categories.length - visibleCards, 0);

  const nextSlide = () => {
    if (slide < maxSlide) {
      setSlide(slide + slideStep);
    }
  };

  const prevSlide = () => {
    if (slide > 0) {
      setSlide(slide - slideStep);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      {/* Heading and Arrows */}
      <div className="flex my-5 items-center justify-between">
        <h2 className="text-[26px] font-bold">What's on your mind?</h2>
        <div className="flex">
          <button
            onClick={prevSlide}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${slide * (100 / visibleCards)}%)` }}
        >
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-[152px] shrink-0 flex flex-col items-center"
            >
              <img
                src={`public/images/${cat.image}`}
                alt={cat.name}
                className="w-full h-[120px] object-contain"
              />
              <span className="mt-2 text-center text-sm font-medium text-gray-700">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border" />
    </div>
  );
};

export default Category;
