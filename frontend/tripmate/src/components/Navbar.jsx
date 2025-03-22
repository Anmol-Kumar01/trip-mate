import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md flex justify-between items-center bg-white">
      <h1 className="text-xl font-bold">TripMate</h1>
      <div>
        <a href="/how-it-works" className="mr-4">How it Works</a>
        <a href="/browse">Browse</a>
      </div>
      <div>
        <button className="mr-4">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">List your Item</button>
      </div>
    </nav>
  );
};

export default Navbar;
