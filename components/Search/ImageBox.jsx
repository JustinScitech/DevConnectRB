"use client";
import React from "react";
import { motion } from "framer-motion";

const ImageBox = ({ styling, link, opacity, imagePreview }) => {
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 10, stiffness: 120 } }
  };

  return (
    <motion.div 
        className={`${styling} justify-center items-center ${opacity}`} 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, type: "spring" },
        }}
        whileTap={{ scale: 0.9 }}
    >
        {imagePreview ? (
            <a href = {link} target="_blank" rel="noopener noreferrer">
            <motion.img src={imagePreview} alt="Uploaded Preview" className="rounded-xl w-full h-full object-cover" /></a>
        ) : (
            <motion.button href = {link} className="p-3 opacity-25"></motion.button>
        )}
    </motion.div>
  );
};

export default ImageBox;