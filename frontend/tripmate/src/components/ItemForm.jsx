import React from "react";
import ImageUpload from "./ImageUpload";

const ItemForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">List Your Item</h2>
      <form>
        <input type="text" placeholder="Item Name" className="border p-2 w-full mb-4" />
        <ImageUpload />
        <button className="bg-black text-white px-4 py-2">Publish Listing</button>
      </form>
    </div>
  );
};

export default ItemForm;
