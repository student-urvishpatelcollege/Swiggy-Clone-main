import React, { useEffect, useState } from 'react';

const Cuisines = () => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch('/cuisines.json')
      .then((res) => res.json())
      .then((data) => setCuisines(data))
      .catch((err) => console.error('Error fetching cuisines:', err));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {cuisines.map((item, index) => (
        <div key={index} className="text-center">
          <img
            src={`/images/cuisines/${item.image}`}
            onError={(e) => (e.target.src = '/images/cuisines/default.jpeg')}
            className="w-full h-[100px] object-cover rounded-lg"
            alt={item.name}
          />
          <p className="mt-2 text-sm font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cuisines;
