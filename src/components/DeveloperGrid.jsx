import React from 'react';
import {motion} from 'framer-motion';
import {developers} from '../data/developers';
import DeveloperCard from './DeveloperCard';

const DeveloperGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-12">
            {developers.map((developer, index) => (
                <motion.div
                    key={developer.id}
                    initial={{opacity: 0, y: 50}}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0], // Animasi gelombang naik turun
                        transition: {y: {repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.1}},
                    }}
                    transition={{duration: 0.5, delay: index * 0.1}}
                >
                    <DeveloperCard developer={developer}/>
                </motion.div>
            ))}
        </div>
    );
};

export default DeveloperGrid;
