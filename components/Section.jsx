import React, { useState } from "react";
import { IoIosBed } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chill from "../components/Assets/Chill.png";
import Paris from "../components/Assets/Paris.jpg";
import Parisn from "../components/Assets/Parisn.jpg";
import { data } from "./data";
import { data1 } from "./data1";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Section = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="sm:-pb-8 mx-auto ml-4 lg:ml-24 md:ml-8 sm:ml-4 block sm:flex items-center  p-4 sm:absolute text-[#333] text-lg sm:text-sm bg-white ">
        <div className="sm:-mt-12 bg-white">
          <p className="flex items-center space-x-4 mb-4 sm:mb-0 ring ring-offset-8 p-1.5 ring-yellow-500 text-gray-400">
            <IoIosBed size={25} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="placeholder-opacity-75 font-semibold md:pr-2 sm:pr-0 lg:pr-36 placeholder-black"
            />
          </p>
        </div>
        <div className="md:ml-1 lg:ml-5 sm:-mt-12 bg-white">
          <p className="flex mb-4 sm:mb-0 space-x-4 ring ring-offset-8 p-1.5 ring-yellow-500  text-gray-400">
            <AiOutlineCalendar size={25} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            >
              <input
                type="text"
                placeholder="Check-in - Check-Out"
                className="placeholder-opacity-75 font-semibold sm:pr-0 placeholder-black"
              />
            </DatePicker>
          </p>
        </div>
        <div className="lg:ml-4 md:ml-1 sm:ml-0 sm:hidden md:inline sm:-mt-12  bg-white">
          <p className="flex mb-4 sm:mb-0 space-x-4 items-center mx-auto ring ring-offset-8 p-1.5 ring-yellow-500 text-gray-400">
            <IoPersonOutline size={25} />
            <input
              type="text"
              placeholder="2 adults ·  0 children"
              className="placeholder-opacity-75 font-semibold lg:pr-6 md:pr-1 sm:pr-0  placeholder-black"
            />
          </p>
        </div>
      </div>
      <div className="flex space-x-2 mt-2 ml-4 sm:mt-10 lg:ml-36 sm:ml-4 md:ml-10 text-[#333] text-base sm:text-sm items-center font-bold ">
        <input type="checkbox" />
        <p>I'm traveling for work</p>
      </div>
      <div className="flex border rounded-xl bg-slate-100 space-x-1 w-fit sm:w-[70%] text-red-600 mt-8 lg:ml-36 sm:ml-4 md:ml-10 items-center p-4 ">
        <CgDanger size={55} />
        <p className="text-[#333]">
          Get the advice you need. Check the latest COVID-19 restrictions before
          you travel.{" "}
          <span className="text-[#00008b] font-semibold">Learn More</span>
        </p>
      </div>
      <div className="text-black lg:ml-36 sm:ml-4 md:ml-10 ml-4 sm:mt-6 mt-4">
        <h1 className="font-bold text-2xl sm:text-3xl ">Offer</h1>
        <p className="text-lg text-[#333] sm:text-xl mt-2">
          Promotions, deals, and special offers for you
        </p>
      </div>
      <div className="border rounded sm:border-none text-lg lg:text-xl  mt-2 sm:mt-4 lg:ml-36 sm:ml-4 md:ml-10 text-black mx-auto bg-slate-50 sm:bg-white block sm:flex sm:justify-between items-center  lg:shadow-2xl">
        <div className="block sm:flex sm:flex-col py-8 sm:py-16">
          <p className="sm:ml-8 ml-4 font-bold">Escape for a while</p>
          <p className="sm:ml-8 ml-4 mt-2 sm:mt-4">
            Enjoy the freedom of a monthly stay on Booking.com
          </p>
          <button className=" lg:w-1/2 ml-4 mt-4 border rounded py-2 px-4 w-fit bg-[#00008b] hover:bg-blue-900 text-blue-50">
            Discover Monthly Stays
          </button>
        </div>
        <div className="flex flex-col w-fit h-fit lg:w-[25%]">
          <img src={Chill} alt="/" />
        </div>
      </div>
      <div className="mt-10 text-black ml-8 sm:ml-36">
        <h1 className="font-bold text-xl sm:text-lg">Explore Nigeria</h1>
        <h1 className="mt-2 text-lg sm:text-base">
          These popular destinations have a lot to offer
        </h1>
      </div>
      <div
        className="mt-3 cursor-pointer p-2 text-black
        items-center mx-auto "
      >
        <Splide
          options={{
            perPage: 5,
            pagination: false,
            rewind: true,
            autoplay: true,
            arrows: true,
            type: "loop",
            gap: "1rem",
            drag: "free",
            breakpoints: {
              640: {
                perPage: 2,
                arrows: false,
              },
            },
          }}
        >
          {data.map((item, index) => (
            <SplideSlide key={index}>
              <img
                src={item.image}
                alt=""
                className="h-3/4 w-full object-cover"
              />
              <p className="mt-2 sm:text-lg text-xl font-bold text-center">
                {item.name}
              </p>
              <p className="sm:text-base text-lg pb-3 text-center">
                {item.properties}
              </p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="mt-4 sm:mt-8">
        <h1 className="lg:ml-36 sm:ml-4 md:ml-10 font-bold text-2xl text-center mx-4 sm:text-3xl text-black">
          Get Inspiration for Next Trip
        </h1>
      </div>
      <div className="flex  sm:mt-4 mx-auto">
        <div className=" relative  flex-col sm:flex-row justify-center flex sm:space-x-6 items-center">
          <img
            src={Paris}
            alt="/"
            className="w-[90%] sm:w-[40%] float-left  object-cover    "
          />
          <img
            src={Parisn}
            alt="/"
            className="w-[90%] sm:w-[40%]  float-right object-cover "
          />
          <div className="absolute z-15 bottom-0 sm:hidden p-6 text-white font-bold text-2xl left-0 ">
            <p>24 Hours in Paris,France</p>
            <p>A 2 day itiernary for visiting Paris</p>
          </div>
        </div>
      </div>
      <div className="container p-2 mt-8 mx-auto items-center cursor-pointer">
        <Splide
          options={{
            perPage: 5,
            pagination: false,
            arrows: true,
            gap: "1rem",
            drag: "free",
            breakpoints: {
              640: {
                perPage: 3,
                arrows: false,
              },
            },
          }}
        >
          {data1.map((item, index) => (
            <SplideSlide key={index}>
              <img
                src={item.image}
                alt="/"
                className="float-left w-40 h-40 sm:w-64 sm:h-64 object-cover "
              />
              <p className="text-black text-2xl">{item.name}</p>
              <p className="text-black text-base">{item.properties}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default Section;
