import React from 'react';
import { useCart } from '../context/CartContext';
import { MdOutlineStarRate } from 'react-icons/md';

const Card = ({
  id,
  name,
  title,
  image,
  price,
  offer,
  rating,
  minTime,
  maxTime,
  place,
}) => {
  const { addToCart } = useCart();

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'public/images/topRestaurants/default.jpeg';
  };

  return (
    <div className="w-full md:w-[273px] mb-6 p-3 rounded-lg shadow hover:shadow-md transition duration-200 bg-white">
      {/* Image block */}
      <div className="relative h-[182px] rounded-[15px] overflow-hidden group">
        <img
          src={`public/images/topRestaurants/${image}`}
          onError={handleImageError}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 bg-white/80 text-black px-2 py-1 text-xs font-semibold rounded-br-md">
          ₹{price} • {offer}
        </div>
      </div>

      {/* Info block */}
      <div className="mt-3">
        <h3 className="text-base md:text-xl font-bold text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MdOutlineStarRate className="text-green-600 mr-1 text-lg" />
          <span>{rating} • {minTime}–{maxTime} mins</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">{name}</p>
        <p className="text-gray-400 text-sm">{place}</p>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={() =>
          addToCart({
            id,
            name,
            title,
            image,
            price,
            quantity: 1,
          })
        }
        aria-label={`Add ${title} to cart`}
        className="mt-3 w-full bg-[#fc8019] text-white px-4 py-2 rounded-md hover:bg-[#e46e0d] transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
