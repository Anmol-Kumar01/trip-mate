import React from "react";

const SearchBar = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Rent Travel Gear from Locals</h2>
      <div className="mt-4">
        <input type="text" placeholder="Where are you going?" className="border p-2 mr-2" />
        <select className="border p-2 mr-2">
          <option>Select Category</option>
        </select>
        <button className="bg-black text-white px-4 py-2">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
