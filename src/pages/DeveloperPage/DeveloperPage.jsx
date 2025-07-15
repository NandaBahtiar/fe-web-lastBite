import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import Header from '../../components/Header';
import DeveloperGrid from '../../components/DeveloperGrid';
import Particles from '../../components/Library/Particles/Particles';
import catImage2 from '../../assets/cat/a79be55e-5980-49ee-82f4-c8e3a95a095c.jpg';
import catImage3 from '../../assets/cat/Image20250506080525.png';
import catImage5 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.22_67a8484a.jpg';
import catImage6 from '../../assets/cat/WhatsApp Image 2025-07-13 at 23.38.49_efd28945.jpg';
import catImage10 from '../../assets/cat/Image20250515160405.png';
import catImage11 from '../../assets/cat/Image20250526104547.png';
import catImage12 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.15_7101b90f.jpg';
import catImage13 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.23_83ab04ca.jpg';
import catImage14 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.24_9e9f37f0.jpg';
import catImage15 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.26_08a3cb47.jpg';
import catImage16 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.26_5d165e73.jpg';
import catImage17 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.27_51d70bbd.jpg';
import catImage18 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.27_5a6fa76c.jpg';
import catImage19 from '../../assets/cat/WhatsApp Image 2025-07-13 at 13.59.27_7cc242b4.jpg';
import catImage20 from '../../assets/cat/WhatsApp Image 2025-07-13 at 14.13.04_ec1c2a69.jpg';
import catImage21 from '../../assets/cat/WhatsApp Image 2025-07-13 at 14.13.07_ad0caa5e.jpg';
import catImage22 from '../../assets/cat/WhatsApp Image 2025-07-13 at 14.13.09_d62c72d7.jpg';
import catImage23 from '../../assets/cat/WhatsApp Image 2025-07-13 at 14.13.12_6d9a0ad2.jpg';


const DeveloperPage = () => {
    const [cats, setCats] = useState([
        {id: 2, src: catImage2, isVisible: true},
        {id: 3, src: catImage3, isVisible: true},
        {id: 5, src: catImage5, isVisible: true},
        {id: 6, src: catImage6, isVisible: true},
        {id: 10, src: catImage10, isVisible: true},
        {id: 11, src: catImage11, isVisible: true},
        {id: 12, src: catImage12, isVisible: true},
        {id: 13, src: catImage13, isVisible: true},
        {id: 14, src: catImage14, isVisible: true},
        {id: 15, src: catImage15, isVisible: true},
        {id: 16, src: catImage16, isVisible: true},
        {id: 17, src: catImage17, isVisible: true},
        {id: 18, src: catImage18, isVisible: true},
        {id: 19, src: catImage19, isVisible: true},
        {id: 20, src: catImage20, isVisible: true},
        {id: 21, src: catImage21, isVisible: true},
        {id: 22, src: catImage22, isVisible: true},
        {id: 23, src: catImage23, isVisible: true},
    ]);

    const [mainCat, setMainCat] = useState({
        src: "https://media.tenor.com/eexVMGWJTdwAAAAi/banana-cat-cat-banana.gif",
        rotate: 360,
        transition: {
            x: {duration: 15, repeat: Infinity, ease: "linear"},
            y: {duration: 3, repeat: Infinity, ease: "easeInOut"},
            rotate: {duration: 2, repeat: Infinity, ease: "linear"},
        }
    });

    const handleCatClick = (id) => {
        const updatedCats = cats.map(cat =>
            cat.id === id ? {...cat, isVisible: false} : cat
        );
        setCats(updatedCats);
    };

    useEffect(() => {
        const allCatsHidden = cats.every(cat => !cat.isVisible);
        if (allCatsHidden) {
            setMainCat({
                src: "https://media.tenor.com/vcboYdN8wxwAAAAi/cat-jumping.gif",
                rotate: 0,
                transition: {
                    x: {duration: 15, repeat: Infinity, ease: "linear"},
                    y: {duration: 3, repeat: Infinity, ease: "easeInOut"},
                    rotate: {duration: 0, ease: "linear"},
                }
            });
        }
    }, [cats]);

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
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="relative z-10"
            >
                <Header/>
                <DeveloperGrid/>
            </motion.div>

            {/* Animasi Kucing Terbang */}
            <motion.img
                src={mainCat.src}
                alt="Flying Cat"
                className="absolute z-20 w-24 h-24 transform scale-x-[-1]"
                animate={{
                    x: [-100, window.innerWidth + 100], // Terbang dari kiri ke kanan
                    y: [50, 150, 50], // Sedikit naik turun
                    rotate: mainCat.rotate, // Animasi berputar
                }}
                transition={mainCat.transition}
            />
            {cats.map((cat, index) => (
                cat.isVisible && (
                    <motion.img
                        key={cat.id}
                        src={cat.src}
                        alt={`Flying Cat ${cat.id}`}
                        className="absolute z-20  h-20 cursor-pointer"
                        animate={{
                            x: [-150, window.innerWidth + 100],
                            y: [Math.random() * 100 + 50, Math.random() * 100 + 100, Math.random() * 100 + 50],
                        }}
                        transition={{
                            x: {duration: 15 + index * 2, repeat: Infinity, ease: "linear", delay: 0.5},
                            y: {duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut"},
                        }}
                        whileTap={{scale: 0.9}}
                        onClick={() => handleCatClick(cat.id)}
                    />
                )
            ))};

        </div>
    );
};

export default DeveloperPage;
""
