'use client'
import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {motion} from "framer-motion"
import logo from "@/public/devconnectlogo.png"
import AnimatedButtonsNavbar from './AnimatedButtonsNavbar';
import Image from 'next/image';
const Navbar = ({toggleSidebar}) => {
  const container = {
    hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale:1, transition: {type: "spring", damping: 10, stiffness: 120}}
};
    return (
        <motion.div
          className="flex h-[10vh] flex-wrap overflow-hidden break-all bg-black pr-8"
          initial="hidden"
          animate="visible"
        >
          

          
          <div className="flex w-full items-start justify-between">
          <motion.button
          onClick={toggleSidebar}
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, type: "spring" },
  }}
  whileTap={{ scale: 0.9}}>

              <Image src={logo} alt="logo" width={70} height={70} />

            </motion.button>
            <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
              <AnimatedButtonsNavbar
                sentence="Home"
                styling="text-white"
                link="/"
              />
        
              <AnimatedButtonsNavbar
                sentence="Find Devs"
                styling="text-white"
                link="/devs"
              />
              <AnimatedButtonsNavbar
                sentence="Find Studios"
                styling="text-white"
                link="/studios"
              />
    
               <AnimatedButtonsNavbar
                sentence="Post"
                styling="text-white"
                link="/post"
              />
            </div>
          </div>
        </motion.div>
      );
    };
    
    export default Navbar;