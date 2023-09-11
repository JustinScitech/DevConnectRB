import React from 'react';

const Search = () => {
    return(
        <div className="relative text-gray-600 justify-center">
            <div className="rounded-md p-1 bg-transparent">
                <input className="bg-slate-100 bg-opacity-10 h-9 px-5 pr-10 rounded-full text-sm focus:outline-none"
                    style={{
                        borderImage: "linear-gradient(to right, cyan-500, blue-500, purple-500)",
                        border: "2px solid"
                    }}
                />
            </div>
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-3">
                🔍
            </button>
        </div>
    );
};

export default Search;
