import React, { useState } from "react";
import USA from "../components/Assets/Usa.png";
import {
  AiOutlineQuestionCircle,
  AiFillCar,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosBed } from "react-icons/io";
import { TbRollercoaster } from "react-icons/tb";
import { MdOutlineFlight, MdOutlineLocalTaxi } from "react-icons/md";

const Navbar = () => {
  const [Nav, SetNav] = useState(false);
  const handleClick = () => {
    SetNav(!Nav);
  };
  return (
    <>
      <div className="flex sticky z-20 top-0 items-center font-medium bg-[#00008b] md:px-36 max-w-[1460px] p-4">
        <h1 className=" text-2xl pt-2 md:mr-96">Bookings.com</h1>
        <div className="hidden md:flex space-x-8 items-center">
          <p>NGN</p>
          <p>
            <img className="w-6 rounded-full" src={USA} alt="/" />
          </p>
          <p>
            <AiOutlineQuestionCircle size={25} />
          </p>
          <div className="hidden md:flex  space-x-2 items-center">
            <p className="border px-2 py-1">List your Property</p>
            <button className="bg-white text-blue-600 border px-3 py-1 text-sm">
              Register
            </button>
            <button className="bg-white text-blue-600 border px-3 py-1 text-sm">
              Sign In
            </button>
          </div>
        </div>
        <div className="block ml-40 md:hidden" onClick={handleClick}>
          <AiOutlineMenu size={30} />
        </div>
      </div>
      <ul
        className={
          Nav
            ? "fixed left-0 top-0 w-[100%] z-10 h-full text-white bg-[#00008b] font-semibold items-center text-center ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <AiOutlineClose
          onClick={handleClick}
          className="absolute top-10 right-4"
          size={30}
        />

        <li className="hover:text-amber-600 text-lg p-4 mt-24">Home</li>
        <li className="hover:text-amber-600 text-lg p-4 ">About Us</li>
        <li className="hover:text-amber-600 text-lg p-4 ">Support</li>
        <li className="hover:text-amber-600 text-lg p-4">Contact</li>
      </ul>
      <div className="hidden md:flex items-center font-medium text-sm bg-[#00008b] px-36 space-x-4 p-2">
        <p className="flex items-center border rounded-full p-3">
          <IoIosBed size={25} className="mr-2" />
          Stays
        </p>
        <div className="flex items-center font-medium bg-[#00008b]">
          <p className="flex items-center p-3">
            <MdOutlineFlight size={25} className="mr-2" />
            Flights
          </p>
        </div>
        <div className="flex items-center font-medium bg-[#00008b]">
          <p className="flex items-center p-3">
            <AiFillCar size={25} className="mr-2" />
            Car Rentals
          </p>
        </div>
        <div className="flex items-center font-medium bg-[#00008b]">
          <p className="flex items-center p-3">
            <TbRollercoaster size={25} className="mr-2" />
            Attractions
          </p>
        </div>
        <div className="flex items-center font-medium bg-[#00008b]">
          <p className="flex items-center p-3">
            <MdOutlineLocalTaxi size={25} className="mr-2" />
            Airport taxis
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
