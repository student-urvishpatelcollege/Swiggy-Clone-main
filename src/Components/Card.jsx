// src/components/Card.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Custom hook to access cart actions
import { MdOutlineStarRate } from 'react-icons/md'; // Star icon for rating display

// Card component receives props related to a restaurant/food item
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
  const { addToCart } = useCart(); // Access the addToCart method from CartContext

  return (
    <div className="w-full md:w-[273px] mb-6 p-3 rounded-lg shadow hover:shadow-md transition duration-200">
      {/* Image with offer and price overlay */}
      <div className="relative h-[182px] rounded-[15px] overflow-hidden group">
        <img
          src={`/images/topRestaurants/${image}`} // Dynamically render image based on file name
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
        />
        {/* Price and offer displayed on top-left corner of the image */}
        <div className="absolute top-0 left-0 bg-white bg-opacity-80 text-black px-2 py-1 text-xs font-semibold rounded-br-md">
          ₹{price} • {offer}
        </div>
      </div>

      {/* Textual information: title, rating, time, name, and place */}
      <div className="mt-3">
        <h3 className="text-base md:text-xl font-bold text-gray-800">{title}</h3>

        {/* Rating and estimated delivery time */}
        <div className="flex items-center text-sm text-gray-600 mt-1">
          <MdOutlineStarRate className="text-green-600 mr-1 text-lg" />
          {rating} • {minTime} - {maxTime} mins
        </div>

        {/* Restaurant name and location */}
        <p className="text-gray-500 text-sm mt-1">{name}</p>
        <p className="text-gray-400 text-sm">{place}</p>
      </div>

      {/* Button to add item to cart */}
      <button
        onClick={() => addToCart({ id, name, image, price })} // Adds the item with basic info
        className="mt-3 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
