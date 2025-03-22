import React from 'react';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>TripMate</h1>
        <p>Rent Travel Gear from Locals</p>
        <input type="text" placeholder="Where are you going?" />
        <select>
          <option>Select Category</option>
          <option>Camping Gear</option>
          <option>Cameras</option>
          <option>Backpacks</option>
          <option>Sports Equipment</option>
        </select>
        <button>Search</button>
      </header>
      <section>
        <h2>Popular Categories</h2>
        <ul>
          <li>Camping Gear</li>
          <li>Cameras</li>
          <li>Backpacks</li>
          <li>Sports Equipment</li>
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 TripMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;