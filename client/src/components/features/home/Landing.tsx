"use client";

import React from "react";
import Image from "next/image";
import { PiCityFill } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import { DatePicker } from "@/components/ui/DatePicker";

const city = ["kathmandu", "Lalitpur", "Pokhara", "Bhaktapur"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Landing = () => {
  return (
    <div className="w-full h-[70vh] md:h-screen relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/landing-bg.png"
        alt="Landing Background"
        fill
        className="object-cover z-0 !h-[55%]"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-4 md:px-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 ,delay: 0.1}}
          className="text-center text-white max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-2">
            Discover and Book Events Near You
          </h1>
          <p className="text-lg md:text-2xl">
            Safe, secure, reliable ticketing. Your ticket to live entertainment!
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-[1360px] min-h-[316px] bg-[linear-gradient(to_right,_#1EBBD7FF_0%,_#1EBBD7FF_50%,_#1EBBD766_100%)] rounded-md p-4 md:p-6 flex flex-col gap-8"
        >
          <h2 className="text-lg md:text-xl text-white mb-2">
            Welcome to The Eventix
          </h2>

          <div className="text-white mb-4">
            <h1 className="text-xl md:text-3xl font-bold">
              WHAT EVENT ARE YOU LOOKING FOR?
            </h1>
            <p className="text-sm md:text-lg">
              Discover concerts, festivals, conferences, workshops and more near you.
            </p>
          </div>

          {/* Input Section */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 bg-[rgba(40,90,99,0.25)] p-4 rounded-md"
          >
            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center border-b-2 border-white w-full sm:w-[320px] md:w-[400px] lg:w-[480px]"
            >
              <input
                type="text"
                className="bg-transparent outline-none p-2 w-full text-white placeholder-white text-base lg:text-lg"
                placeholder="Search for Events, Artist or Venue"
              />
              <IoSearch size={24} className="text-white" />
            </motion.div>

            {/* City Dropdown */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 text-white text-base w-full md:w-auto"
            >
              <PiCityFill
                size={28}
                className="bg-white text-gray-500 p-1 rounded-full"
              />
              <span>City</span>
              <select className="bg-transparent text-white outline-none border-b border-white">
                {city.map((item, idx) => (
                  <option key={idx} className="text-black">
                    {item}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Date Picker */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-2 text-white text-base w-full md:w-auto"
            >
              <div className="flex items-center justify-center bg-white text-gray-500 rounded-full w-8 h-8 shrink-0">
                <MdOutlineDateRange className="text-lg" />
              </div>
              <span className="whitespace-nowrap">Date</span>
              <DatePicker />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
