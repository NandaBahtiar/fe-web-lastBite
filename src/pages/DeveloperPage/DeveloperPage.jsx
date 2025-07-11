import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import DeveloperGrid from '../../components/DeveloperGrid';
import Particles from '../../components/Library/Particles/Particles';

const DeveloperPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#4F46E5", "#EC4899", "#10B981", "#F59E0B"]}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Header />
        <DeveloperGrid />
      </motion.div>

      {/* Animasi Kucing Terbang */}
      <motion.img
        src="https://media.tenor.com/eexVMGWJTdwAAAAi/banana-cat-cat-banana.gif" // URL GIF baru
        alt="Flying Cat"
        className="absolute z-20 w-24 h-24 transform scale-x-[-1]"
        animate={{
          x: [-100, window.innerWidth + 100], // Terbang dari kiri ke kanan
          y: [50, 150, 50], // Sedikit naik turun
          rotate: 360, // Animasi berputar
        }}
        transition={{
          x: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 2, repeat: Infinity, ease: "linear" }, // Durasi dan jenis putaran
        }}
      />
    </div>
  );
};

export default DeveloperPage;
