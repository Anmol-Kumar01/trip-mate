import React, { useState } from 'react';

const ListYourItem = () => {
  const [itemDetails, setItemDetails] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    condition: '',
  });

  const handleChange = (e) => {
    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>List Your Item</h2>
      <input
        type="text"
        name="title"
        placeholder="Item Title"
        value={itemDetails.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={itemDetails.category}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={itemDetails.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={itemDetails.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="condition"
        placeholder="Condition"
        value={itemDetails.condition}
        onChange={handleChange}
      />
      <button type="submit">Publish Listing</button>
    </form>
  );
};

export default ListYourItem;