import React from "react";
import HERO from "../components/Assets/Hero.jpeg";

const Hero = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden ">
        <img
          src={HERO}
          alt="/"
          className=" max-w-[1460px] md:w-full object-scale-down "
        />
        <div className="absolute top-0 left-0 p-4 md:p-0 w-full font-semibold">
          <p className="md:px-36 mt-6 md:mt-12 text-2xl">
            Available until Jan 3, 2023
          </p>
          <p className="md:px-36 mt-2 md:mt-4 text-5xl font-bold">
            Save 15% with Late Escape
          </p>
          <p className="md:px-36 mt-2 md:mt-4 text-5xl font-bold">Deals</p>
          <p className="md:px-36 mt-2 md:mt-4 text-2xl ">
            There’s still time to check one more destination off your
          </p>
          <p className="md:px-36 mt-2 text-2xl">Wishlist</p>
          <button className="md:ml-36 mt-2 md:mt-4 border rounded py-3.5 px-3 bg-[#00008b] hover:bg-blue-900 text-blue-50">
            Explore Deals
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
