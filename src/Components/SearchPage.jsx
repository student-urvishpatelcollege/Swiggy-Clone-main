import React, { useState, useEffect, useRef, useCallback } from 'react';
import { IoClose } from 'react-icons/io5';
import debounce from 'lodash.debounce';

// 🔍 Mock API
const mockAPI = (query) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { name: 'Pizza', type: 'Dish', image: '/images/Pizza.avif' },
        { name: "Domino's Pizza", type: 'Restaurant', image: '/images/dominos_pizza.avif' },
        { name: "La Pino'z Pizza", type: 'Restaurant', image: '/images/La_Pino_pizza.avif' },
        { name: 'Pizza Hut', type: 'Restaurant', image: '/images/Pizza_hut.avif' },
        { name: 'Veg Pizza', type: 'Dish', image: '/images/Veg_Pizza.avif' },
        { name: 'Feta Cheese Pizza', type: 'Dish', image: '/images/Cheese_Pizza.avif' },
        { name: 'Burger', type: 'Dish', image: '/images/Burger.avif' },
        { name: "McDonald's", type: 'Restaurant', image: '/images/onion_burger.avif' },
        { name: "Burger King", type: 'Restaurant', image: '/images/Burger_king.avif' },
        { name: 'Veg Burger', type: 'Dish', image: '/images/veg_burger.avif' },
        { name: 'Cheese Burger', type: 'Dish', image: '/images/cheese_burger.avif' },
        { name: 'Crispy Veg Burger', type: 'Dish', image: '/images/crispy_veg_burger.avif' },
        { name: 'Masala Dosa', type: 'Dish', image: '/images/masala_dosa.avif' },
        { name: 'Plain Dosa', type: 'Dish', image: '/images/plain_dosa.avif' },
        { name: 'Cheese Dosa', type: 'Dish', image: '/images/cheese_dosa.avif' },
        { name: 'Rava Dosa', type: 'Dish', image: '/images/rava_dosa.avif' },
        { name: 'Pav Bhaji', type: 'Dish', image: '/images/pav_bhaji.avif' },
        { name: 'Cheese Pav Bhaji', type: 'Dish', image: '/images/cheese_pav_bhaji.avif' },
        { name: 'Samosa', type: 'Dish', image: '/images/samosa.avif' },
        { name: 'Paneer Samosa', type: 'Dish', image: '/images/paneer_samosa.avif' },
        { name: 'Hakka Noodles', type: 'Dish', image: '/images/hakka_noodles.avif' },
        { name: 'Veg Manchurian', type: 'Dish', image: '/images/veg_manchurian.avif' },
        { name: 'Chinese Combo', type: 'Dish', image: '/images/chinese_combo.avif' },
      ];

      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });

// 🟨 Highlight matched text
const highlightText = (text, highlight) => {
  if (!highlight) return text;
  const regex = new RegExp(`(${highlight})`, 'gi');
  return text.replace(regex, `<mark class="bg-yellow-100">$1</mark>`);
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef();

  const fetchResults = useCallback(
    debounce(async (query) => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      const res = await mockAPI(query);
      setResults(res);
      setActiveIndex(-1);
    }, 300),
    []
  );

  useEffect(() => {
    fetchResults(searchTerm);
  }, [searchTerm, fetchResults]);

  useEffect(() => {
    const activeItem = document.querySelector('.active-search-item');
    if (activeItem) {
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => (prev + 1 < results.length ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      alert(`You selected: ${results[activeIndex].name}`);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 pt-12 pb-24" ref={containerRef}>
      {/* 🔍 Search Input */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search for dishes or restaurants"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full border border-gray-300 rounded-lg px-6 py-4 text-[17px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fc8019] placeholder-gray-400"
        />
        {searchTerm && (
          <IoClose
            onClick={() => setSearchTerm('')}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-black cursor-pointer"
          />
        )}
      </div>

      {/* 🔽 Results List */}
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm divide-y max-h-[460px] overflow-y-auto">
        {results.map((item, index) => (
          <div
            key={index}
            onClick={() => alert(`You selected: ${item.name}`)}
            className={`cursor-pointer flex items-center gap-5 px-5 py-4 hover:bg-gray-50 transition ${
              index === activeIndex ? 'bg-gray-100 active-search-item' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg border"
              onError={(e) => (e.target.src = 'public/images/placeholder.jpg')}
            />
            <div>
              <h4
                className="font-semibold text-[17px] text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: highlightText(item.name, searchTerm),
                }}
              />
              <p className="text-sm text-gray-500 mt-[2px]">{item.type}</p>
            </div>
          </div>
        ))}

        {/* 🚫 No Results */}
        {results.length === 0 && searchTerm.trim() !== '' && (
          <div className="py-8 text-center text-gray-500 text-base">
            No results found for "<strong>{searchTerm}</strong>"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
