import React from 'react';
import {motion} from 'framer-motion';

const DeveloperCard = ({developer}) => {
    return (
        <motion.div
            whileHover={{scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)"}}
            transition={{duration: 0.3}}
            className="rounded-lg p-1 text-center"
        >
            <img src={developer.image} alt={developer.name} className="w-24 h-24 rounded-full mx-auto mb-3"/>
            <h3 className="text-lg font-bold text-white">{developer.name}</h3>
            <p className="text-indigo-500 font-semibold text-sm">{developer.role}</p>
            <div className="mt-3 flex justify-center space-x-3">
                <a href={developer.github} target="_blank" rel="noopener noreferrer"
                   className="text-gray-500 hover:text-gray-800 transition-colors duration-300 text-sm">
                    GitHub
                </a>
                <a href={developer.linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-gray-500 hover:text-gray-800 transition-colors duration-300 text-sm">
                    LinkedIn
                </a>
            </div>
        </motion.div>
    );
};

export default DeveloperCard;
