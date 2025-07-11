
import React from 'react';
import { motion } from 'framer-motion';

const DeveloperCard = ({ developer }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="rounded-lg p-6 text-center"
    >
      <img src={developer.image} alt={developer.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-800">{developer.name}</h3>
      <p className="text-indigo-500 font-semibold">{developer.role}</p>
      <p className="text-gray-600 mt-2">{developer.bio}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href={developer.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
          GitHub
        </a>
        <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors duration-300">
          LinkedIn
        </a>
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
