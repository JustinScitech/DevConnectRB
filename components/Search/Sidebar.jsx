'use client'
import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {FaHome, FaUser, FaBox, FaDoorOpen} from 'react-icons/fa'
import Link from 'next/link';
const Sidebar = () => {
    const container = {
        hidden: {opacity: 0, scale: 0}, visible: {opacity: 1, scale:1, transition: {type: "spring", damping: 10, stiffness: 120}}
    };
    return ((
        <div className="h-full lg:w-1/6 relative text-white bg-black flex flex-col items-start px-8 pt-8">
            <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
            <Link href = "/">
            <motion.button
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, type: "spring" },
  }}
  whileTap={{ scale: 0.9}}
>
            <h2 className={`mb-3 text-xl font-thin flex gap-2`}>
            <FaHome size={25}/> Home
          </h2>
          </motion.button>
          </Link>
          </motion.div>
          <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
            <Link href = "/studios">
          <motion.button
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, type: "spring" },
  }}
  whileTap={{ scale: 0.9}}
>
            <h2 className={`mb-3 text-xl font-thin flex gap-2`}>
            <FaBox size={25}/> Studios
          </h2>
          </motion.button>
          </Link>
          </motion.div>
          <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
          
          <Link href = "/devs">
          <motion.button
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, type: "spring" },
  }}
  whileTap={{ scale: 0.9}}
>
            <h2 className={`mb-3 text-xl font-thin flex gap-2`}>
            <FaUser size={25}/>Developers
          </h2>
          </motion.button>
          </Link>

          </motion.div>

          
          
          <motion.div className = "flex" variants = {container} initial = "hidden" animate = "visible">
          
          <Link href = "/login">
          <motion.button
  whileHover={{
    scale: 1.05,
    transition: { duration: 0.3, type: "spring" },
  }}
  whileTap={{ scale: 0.9}}
>
            <h2 className={`mb-3 text-xl font-thin flex gap-2`}>
            <FaDoorOpen size={25}/>Login
          </h2>
          </motion.button>
          </Link>

          </motion.div>

        </div>

    )
    );
};

export default Sidebar;
