import React from "react";
import CountUp from '../Library/CountUp/CountUp.jsx'

const Impact = () => {
    return (
        <section id="impact" class="py-20 bg-gray-100">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Our Collective Impact
                </h2>
                <p class="text-muted max-w-2xl mx-auto mb-12">
                    Every meal saved contributes to a healthier planet. See what our
                    community has achieved together.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div
                        class="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="text-primary text-5xl mb-4">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <h3
                            class="text-4xl font-bold text-dark counter"
                            data-target="15780"
                        >
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                        </h3>
                        <p class="text-muted mt-2">Meals Saved</p>
                    </div>
                    <div
                        class="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="text-primary text-5xl mb-4">
                            <i class="fas fa-smog"></i>
                        </div>
                        <h3
                            class="text-4xl font-bold text-dark counter"
                            data-target="39450"
                        >
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                        </h3>
                        <p class="text-muted mt-2">Kg of CO₂ Prevented</p>
                    </div>

                    <div
                        class="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                        <div class="text-primary text-5xl mb-4">
                            <i class="fas fa-tint"></i>
                        </div>
                        <h3
                            class="text-4xl font-bold text-dark counter"
                            data-target="23500000"
                        >
                            <CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />
                        </h3>
                        <p class="text-muted mt-2">Liters of Water Saved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
