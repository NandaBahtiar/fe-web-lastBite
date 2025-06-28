import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white/5 p-6 rounded-xl flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 ease-in-out shadow-lg hover:shadow-secondary/20">
        <div className="bg-secondary text-white rounded-full p-4 mb-5">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
    </div>
);

const Why = () => {
    const features = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
            title: "Save Big",
            description: "Get delicious, high-quality meals at a fraction of the cost. Your wallet will thank you."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: "Reduce Waste",
            description: "Play a crucial role in the fight against food waste. Every meal you save makes a difference for the planet."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M12 3v18" /></svg>,
            title: "Discover Gems",
            description: "Explore a variety of local restaurants and stores, and uncover hidden culinary treasures in your city."
        }
    ];

    return (
        <section className="bg-primary py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                        Why You'll Love <span className="text-secondary">LastBite</span>
                    </h2>
                    <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
                        It's more than just a meal. It's a smarter, more sustainable way to eat.
                    </p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Why;