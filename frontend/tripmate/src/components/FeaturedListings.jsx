import React from "react";
import ListingCard from "./ListingCard";

const FeaturedListings = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <ListingCard title="Camping Tent" price="$20/day" />
      <ListingCard title="Camera Kit" price="$45/day" />
      <ListingCard title="Hiking Boots" price="$15/day" />
    </div>
  );
};

export default FeaturedListings;
