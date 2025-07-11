
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-white text-center py-16"
    >
      <motion.h1
          className="text-6xl md:text-7xl font-extrabold leading-tight text-shadow-lg"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
          }}
        >
          {"Meet Our Team".split("").map((char, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -20, 0], // Animasi naik turun
                transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: index * 0.05 },
              }}
              style={{ display: "inline-block" }} // Penting agar animasi y berfungsi per huruf
            >
              {char === " " ? "\u00A0" : char} {/* Mengganti spasi dengan non-breaking space */}
            </motion.span>
          ))}
        </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto"
      >
        We are a team of passionate developers and designers dedicated to creating amazing digital experiences.
      </motion.p>
    </motion.header>
  );
};

export default Header;
