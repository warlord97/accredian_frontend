import React from "react";

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Left side of the Navbar */}
        <div className="flex items-center">
          <img className="w-28 h-10" src="/logo.svg" alt="logo" />
          <button className="ml-4 bg-primary text-white py-2 px-4 rounded-md hidden items-center md:flex">
            <span>Courses</span> <img className="ml-2 h-4" src="/SVG.svg" alt="" />
          </button>
        </div>

        {/* Right side of the Navbar */}
        <div className="flex items-center md:mt-0">
          <a href="#" className="text-primary hover:text-blue-700 px-3 py-2 md:py-0 hidden md:inline-block">Refer & Earn</a>
          <button className="hidden md:inline-block bg-gray-200 text-fontPrimary py-2 px-4 rounded-md ml-4">Login</button>
          <button className="hidden md:inline-block bg-primary text-white py-2 px-4 rounded-md ml-4">Try for free</button>
          <button className="md:hidden bg-blue-500 text-white py-2 px-4 rounded-md ml-4">Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
