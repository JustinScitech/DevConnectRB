'use client'
import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';


const Search = () => {
    return(
        <div className="relative text-gray-600 justify-center">
            <div className="rounded-md p-1 bg-transparent">
                <input className={`bg-slate-100 bg-opacity-10 h-10 px-5 pr-10 rounded-full text-sm blur:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500`}
                    style={{
                        borderImage: "linear-gradient(to right, cyan-500, blue-500, purple-500)",
                        border: "2px solid",
                        
                    }}
                    placeholder="Find your next team..."
                />
            </div>
            <button type="submit" className="absolute right-0 top-0 mt-4 mr-3">
            <FaSearch/>          
            </button>
        </div>
    );
};

export default Search;
