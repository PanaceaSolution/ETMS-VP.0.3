"use client";

import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import NavLink from "@/components/ui/NavLink";

const Links = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/" },
  { name: "Tickets rate", path: "/" },
  { name: "Contact Us", path: "/" },
  { name: "About Us", path: "/" },
  { name: "FaQ", path: "/" },
];
const linkContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <nav
      className="h-[8svh] md:h-[10dvh] w-full flex items-center justify-around bg-gray-100 shadow-sm z-50"
    >
      {/* Logo */}
      <motion.img
        src="/assets/logo.png"
        alt="Logo"
        className="h-[17px] w-[120px] md:h-[22px] md:w-[189px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Hamburger Dropdown (Mobile) */}
      <motion.div
        className="hamburger sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GiHamburgerMenu size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="animate-in fade-in slide-in-from-top-2">
            {Links.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href={item.path}>{item.name}</Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem>Login</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Desktop Nav Links */}
      <motion.div
        className="links gap-4 xl:gap-12 items-center hidden sm:flex"
        variants={linkContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {Links.map((item, index) => (
          <motion.div key={index} variants={linkItemVariants}>
            <NavLink
              name={item.name}
              path={item.path}
              className="text-xs md:text-lg baumans xl:text-2xl xl:gap-4 hover:font-semibold tracking-wider"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Desktop Login Button */}
      <motion.button
        className="btn-color-primary text-white px-4 py-2 rounded-sm xl:text-xl hover:cursor-pointer opacity-90 hover:opacity-100 hidden md:block"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        Login
      </motion.button>
    </nav>
  );
};

export default Header;
