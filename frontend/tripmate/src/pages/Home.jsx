import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

import Categories from "../components/Categories";
import FeaturedListings from "../components/FeaturedListings";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Categories />
      <FeaturedListings />
      <Footer />
    </div>
  );
};

export default Home;
