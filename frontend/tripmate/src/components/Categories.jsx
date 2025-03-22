import React from "react";

const categories = ["Camping gears", "Cameras", "Backpacks", "Sports equipment"];

const Categories = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold">Popular Categories</h3>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {categories.map((category) => (
          <button key={category} className="border p-4 rounded">{category}</button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
