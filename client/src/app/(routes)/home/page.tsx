"use client"
import useChangeTheme from "@/hooks/useChangeTheme";
import { useAppSelector } from "@/store/store";
import React from "react";

const Home = () => {
  const { handleThemeChange } = useChangeTheme();
  const theme = useAppSelector((state) => state.theme.value);
  return (
      <div
      className={`flex flex-col gap-6 items-center justify-center h-screen w-screen text-4xl ${
        theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
      } transition-all duration-1000 ease-in-out`}
    >
      <h1>Welcome to Eventix Ticketing Platform At {theme} Theme !</h1>
      <button
        onClick={handleThemeChange}
        className={`${
          theme === "light"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-black"
        } px-4 py-2 rounded-lg text-sm`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Home;
