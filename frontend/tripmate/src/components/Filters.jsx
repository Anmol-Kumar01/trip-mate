import React from "react";

const Filters = () => {
  return (
    <div className="p-4">
      <input type="text" placeholder="Search" className="border p-2" />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2">Filter</button>
    </div>
  );
};

export default Filters;
