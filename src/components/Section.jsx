import React, { useState } from "react";
import { IoIosBed } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chill from "../components/Assets/Chill.png";
import Paris from "../components/Assets/Paris.avif";
import Parisn from "../components/Assets/Parisn.avif";
import { data } from "./data";
import { data1 } from "./data1";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Section = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="md:-pb-8 mx-auto ml-4 md:ml-36  block md:flex items-center w-[90%] p-4 md:absolute text-[#333] text-lg md:text-sm bg-white ">
        <div className="md:-mt-12 bg-white">
          <p className="flex items-center space-x-4 mb-4 md:mb-0 ring ring-offset-8 p-1.5 ring-yellow-500 text-gray-400">
            <IoIosBed size={25} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="placeholder-opacity-75 font-semibold md:pr-36 placeholder-black"
            />
          </p>
        </div>
        <div className="md:ml-5 md:-mt-12 bg-white">
          <p className="flex mb-4 md:mb-0 space-x-4 ring ring-offset-8 p-1.5 ring-yellow-500  text-gray-400">
            <AiOutlineCalendar size={25} />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            >
              <input
                type="text"
                placeholder="Check-in - Check-Out"
                className="placeholder-opacity-75 font-semibold md:pr-4 placeholder-black"
              />
            </DatePicker>
          </p>
        </div>
        <div className="md:ml-4 md:-mt-12 bg-white">
          <p className="flex mb-4 md:mb-0 space-x-4 items-center mx-auto ring ring-offset-8 p-1.5 ring-yellow-500 text-gray-400">
            <IoPersonOutline size={25} />
            <input
              type="text"
              placeholder="2 adults ·  0 children"
              className="placeholder-opacity-75 font-semibold md:pr-6 placeholder-black"
            />
          </p>
        </div>
      </div>
      <div className="flex space-x-2 mt-2 ml-4 md:mt-10 md:ml-36 text-[#333] text-base md:text-sm items-center font-bold ">
        <input type="checkbox" />
        <p>I'm traveling for work</p>
      </div>
      <div className="flex border rounded-xl bg-slate-100 space-x-1 w-fit md:w-[70%] text-red-600 mt-8 md:ml-36 items-center p-4 ">
        <CgDanger size={55} />
        <p className="text-[#333]">
          Get the advice you need. Check the latest COVID-19 restrictions before
          you travel.{" "}
          <span className="text-[#00008b] font-semibold">Learn More</span>
        </p>
      </div>
      <div className="text-black md:ml-36 ml-4 md:mt-6 mt-4">
        <h1 className="font-bold text-2xl md:text-3xl ">Offer</h1>
        <p className="text-lg text-[#333] md:text-xl mt-2">
          Promotions, deals, and special offers for you
        </p>
      </div>
      <div className="border text-lg md:text-base mt-2 md:mt-4 md:ml-36 text-black mx-auto w-[80%] bg-slate-50 block md:flex md:justify-between items-center rounded shadow-2xl">
        <div className="block md:flex md:flex-col py-8 md:py-16">
          <p className="md:ml-8 ml-4 font-bold">Escape for a while</p>
          <p className="md:ml-8 ml-4 mt-2 md:mt-4">
            Enjoy the freedom of a monthly stay on Booking.com
          </p>
          <button className=" md:w-1/2 ml-8 mt-4 border rounded py-3.5 px-3 bg-[#00008b] hover:bg-blue-900 text-blue-50">
            Discover Monthly Stays
          </button>
        </div>
        <div className="flex flex-col w-fit md:w-[25%]">
          <img src={Chill} alt="/" />
        </div>
      </div>
      <div className="mt-10 text-black ml-8 md:ml-36">
        <h1 className="font-bold text-xl md:text-lg">Explore Nigeria</h1>
        <h1 className="mt-2 text-lg md:text-base">
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
            arrows: true,
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
              <img src={item.image} alt="" />
              <p className="mt-2 md:text-lg text-xl font-bold text-center">
                {item.name}
              </p>
              <p className="md:text-base text-lg pb-3 text-center">
                {item.properties}
              </p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="mt-4 md:mt-8">
        <h1 className="md:ml-36 font-bold text-2xl md:text-3xl text-black">
          Get Inspiration for next trip
        </h1>
      </div>
      <div className="flex  md:mt-4 mx-auto">
        <div className=" relative md:ml-48 container flex-col md:flex-row mx-auto flex md:space-x-6 items-center">
          <img
            src={Paris}
            alt="/"
            className="w-fit md:w-[40%] float-left object-cover h-full  "
          />
          <img
            src={Parisn}
            alt="/"
            className="w-fit md:w-[40%] h-full float-right object-cover"
          />
          <div className="absolute z-15 bottom-0 bg-black/50 w-fit p-4 text-white font-bold text-2xl left-0 ">
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
                className="float-left w-40 h-40 md:w-64 md:h-64 object-cover "
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
