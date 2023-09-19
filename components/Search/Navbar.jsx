'use client'
import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {motion} from "framer-motion"
import logo from "@/public/devconnectlogo.png"
import AnimatedButtonsNavbar from './AnimationsButtonNavbar';
import Image from 'next/image';
const Navbar = () => {
    return (
        <motion.div
          className="flex h-[10vh] flex-wrap overflow-hidden break-all bg-black pr-8"
          initial="hidden"
          animate="visible"
        >
          
          <div className="flex w-full items-start justify-between">
            <button>
              <Image src={logo} alt="logo" width={150} height={150} />
            </button>
    
            <div className="flex flex-row items-center justify-center gap-4 pt-4 text-center">
              <AnimatedButtonsNavbar
                sentence="Home"
                styling="text-white"
                link=""
              />
        
              <AnimatedButtonsNavbar
                sentence="Annotate"
                styling="text-white"
                link=""
              />
              <AnimatedButtonsNavbar
                sentence="Process"
                styling="text-white"
                link=""
              />
              <AnimatedButtonsNavbar
                sentence="Run Model"
                styling="text-white"
                link="/"
              />
    
               <AnimatedButtonsNavbar
                sentence="Add Wallet"
                styling="text-white"
                link=""
              />
            </div>
          </div>
        </motion.div>
      );
    };
    
    export default Navbar;