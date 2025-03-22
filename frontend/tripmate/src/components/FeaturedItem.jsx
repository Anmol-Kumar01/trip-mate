import React from "react";

const FeaturedItem = ({ title, price, description }) => {
  return (
    <div className="border p-4 rounded">
      <div className="h-32 bg-gray-300 mb-2"></div>
      <h4 className="font-bold">{title}</h4>
      <p>{description}</p>
      <p className="font-bold">{price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2">Rent Now</button>
    </div>
  );
};

export default FeaturedItem;
