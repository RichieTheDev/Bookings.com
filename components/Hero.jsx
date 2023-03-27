import React from "react";
import HERO from "../components/Assets/Hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="relative  ">
        <img src={HERO} alt="/" className=" h-[490px]  object-cover w-full" />
        <div className="absolute top-0 left-0 p-4 sm:p-0 w-full font-semibold">
          <p className="md:px-10 sm:px-4 lg:px-36 mt-6 sm:mt-12 text-2xl">
            Available until Jan 3, 2023
          </p>
          <p className="md:px-10 sm:px-4 lg:px-36 mt-2 sm:mt-4 text-5xl font-bold">
            Save 15% with Late Escape
          </p>
          <p className="md:px-10 sm:px-4 lg:px-36 mt-2 sm:mt-4 text-5xl font-bold">
            Deals
          </p>
          <p className="md:px-10 sm:px-4 lg:px-36 mt-2 sm:mt-4 text-2xl ">
            There’s still time to check one more destination off your
          </p>
          <p className="md:px-10 sm:px-4 lg:px-36 mt-2 text-2xl">Wishlist</p>
          <button className="md:ml-10 sm:ml-4 lg:ml-36 mt-2 sm:mt-4 border rounded py-3.5 px-3 bg-[#00008b] hover:bg-blue-900 text-blue-50">
            Explore Deals
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
