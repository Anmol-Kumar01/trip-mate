import React from "react";
import Navbar from "../components/Navbar"; 
import Filters from "../components/Filters";
import FeaturedListings from "../components/FeaturedListings";
import Footer from "../components/Footer";

const Browse = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <FeaturedListings />
      <Footer />
    </div>
  );
};

export default Browse;
