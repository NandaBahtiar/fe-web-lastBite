import React from "react";
import {CreditCardIcon, SearchLocationIcon, ShoppingBagIcon,} from "../../assets/Icon";

const Step = () => { // Added a comment to force re-render
    const secondaryColor = "bg-green-400";
    const textColorMuted = "text-gray-600";

    return (
        <section id="HowItWorks" className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Just 3 Easy Steps
                    </h2>
                    <p className={`${textColorMuted} mt-2`}>
                        Save delicious food quickly and conveniently.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                    {/* Step 1 */}
                    <div className="p-6">
                        <div
                            className={`flex items-center justify-center h-20 w-20 rounded-full ${secondaryColor} text-white mx-auto mb-4 shadow-lg`}
                        >
                            <SearchLocationIcon/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            1. Discover
                        </h3>
                        <p className={textColorMuted}>
                            Explore surplus food offers from restaurants and stores around
                            you.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="p-6">
                        <div
                            className={`flex items-center justify-center h-20 w-20 rounded-full ${secondaryColor} text-white mx-auto mb-4 shadow-lg`}
                        >
                            <CreditCardIcon/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            2. Order & Pay
                        </h3>
                        <p className={textColorMuted}>
                            Order your chosen food and pay securely directly in the app.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="p-6">
                        <div
                            className={`flex items-center justify-center h-20 w-20 rounded-full ${secondaryColor} text-white mx-auto mb-4 shadow-lg`}
                        >
                            <ShoppingBagIcon/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">
                            3. Pick Up & Enjoy
                        </h3>
                        <p className={textColorMuted}>
                            Pick up your order at the seller's location at the specified time.
                            Enjoy!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Step;
