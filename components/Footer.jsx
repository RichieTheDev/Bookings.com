import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#00008b] p-10 mt-10 text-center items-center text-white">
        <p className="text-2xl">Save time, save money!</p>
        <p className="text-xl mt-2">
          Sign up and we'll send the best deals to you
        </p>
        <div className="flex mt-4 justify-center items-center">
          <input
            type="email"
            placeholder="Your Email"
            className="py-3.5 px-3 w-96 rounded text-black"
          />
          <button className=" border rounded py-3.5 px-3 bg-[#00008b] items-center hover:bg-blue-900 text-blue-50">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex justify-between space-x-10 md:pl-36 text-gray-100 p-6 items-center mx-auto bg-gray-700 pt-6">
        <p>2022 Bookings.com</p>
        <p>Content cloned from Booking.com</p>
        <p></p>
      </div>
    </>
  );
};

export default Footer;
