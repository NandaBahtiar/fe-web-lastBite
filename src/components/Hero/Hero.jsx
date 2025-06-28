import React from 'react';
import { FaSearch, FaHandshake } from 'react-icons/fa';

const Hero = () => {


    return (
        <div id={""}
             className={`w-full h-[100vh] bg-primary flex flex-col justify-center items-center `}>

            <h1 className={`text-7xl font-extrabold text-white mb-4 text-shadow-lg`}>
                Delicious Food, Friendly Prices.
            </h1>
            <p className={
                "text-lg text-white/80 max-w-2xl text-center"
            }>
                Get quality surplus food from your favorite restaurants and cafes at a huge
                discount.

            </p>
            <p className={"text-lg text-white/80 max-w-2xl text-center"}>
                Reduce food waste starting today.
            </p>

            <div className="flex gap-4 mt-6">
                <button
                    className="bg-secondary text-white rounded-full py-3 px-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <FaSearch />
                    Find Food
                </button>
                <button
                    className="bg-transparent border border-white text-white rounded-full py-3 px-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <FaHandshake />
                    Become a Partner
                </button>
            </div>


        </div>
    )
}
export default Hero
