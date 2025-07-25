"use client"
import Events from "@/components/features/home/Events";
import Landing from "@/components/features/home/Landing";
import useChangeTheme from "@/hooks/useChangeTheme";
import { useAppSelector } from "@/store/store";
import React from "react";

const Home = () => {
  const { handleThemeChange } = useChangeTheme();
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <div className="w-full h-full">
      <Landing/>
      <Events/>
    </div>
  );
};

export default Home;
