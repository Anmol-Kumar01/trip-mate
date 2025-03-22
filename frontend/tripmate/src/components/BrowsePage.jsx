import React from 'react';

const BrowsePage = () => {
  return (
    <div className="browse-page">
      <header>
        <h1>TripMate</h1>
        <input type="text" placeholder="Search for gear..." />
        <button>Filter</button>
      </header>
      <section>
        <h2>Featured Items</h2>
        <div className="featured-items">
          <div className="item">Premium Camera: $45/Day</div>
          <div className="item">4-Person Tent: $20/Day</div>
          <div className="item">Orange Backpack: $10/Day</div>
        </div>
        <h2>All Listings</h2>
        <div className="all-listings">
          <div className="item">Hiking Boots: $15/Day</div>
          <div className="item">Mountain Tent: $25/Day</div>
        </div>
      </section>
    </div>
  );
};

export default BrowsePage;