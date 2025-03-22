import React from "react";

const ListingCard = ({ title, price }) => {
  return (
    <div className="border p-4">
      <div className="h-32 bg-gray-300"></div>
      <h4 className="font-bold">{title}</h4>
      <p className="font-bold">{price}</p>
    </div>
  );
};

export default ListingCard;
