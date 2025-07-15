import React from "react";
import {FaHandshake, FaSearch} from "react-icons/fa";

const Hero = () => {
    return (
        <div
            id={"hero"}
            className={`w-full min-h-screen bg-primary flex flex-col justify-center items-center px-4 py-16`}
        >
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-light mb-4 text-shadow-lg text-center leading-tight`}>
                Makanan Lezat, Harga Bersahabat.
            </h1>
            <p className={"text-base md:text-lg text-light/80 max-w-3xl text-center mb-4"}>
                Dapatkan makanan surplus berkualitas dari restoran dan kafe favorit Anda
                dengan diskon besar.
            </p>
            <p className={"text-base md:text-lg text-light/80 max-w-3xl text-center"}>
                Kurangi limbah makanan mulai hari ini.
            </p>

            <div className="flex gap-4 mt-6">

                <a href="#contact"
                   className="bg-secondary text-white rounded-full py-3 px-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <FaSearch/>
                    Cari Makanan
                </a>
                <a href="#contact"
                   className="bg-transparent border border-white text-white rounded-full py-3 px-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center gap-2">
                    <FaHandshake/>
                    Jadi Mitra
                </a>
            </div>
        </div>
    );
};
export default Hero;
