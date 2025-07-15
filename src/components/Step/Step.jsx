import React from "react";
import {CreditCardIcon, SearchLocationIcon, ShoppingBagIcon,} from "../../assets/Icon";

const Step = () => { // Added a comment to force re-render
    const secondaryColor = "bg-secondary";
    const textColorMuted = "text-gray-600";

    return (
        <section id="HowItWorks" className="py-16 sm:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Hanya 3 Langkah Mudah
                    </h2>
                    <p className={`${textColorMuted} mt-2`}>
                        Hemat makanan lezat dengan cepat dan nyaman.
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
                        <h3 className="text-xl font-semibold mb-2 text-dark">
                            1. Temukan
                        </h3>
                        <p className={textColorMuted}>
                            Jelajahi penawaran makanan berlebih dari restoran dan toko di
                            sekitar Anda.
                        </p>
                    </div>
                    {/* Step 2 */}
                    <div className="p-6">
                        <div
                            className={`flex items-center justify-center h-20 w-20 rounded-full ${secondaryColor} text-white mx-auto mb-4 shadow-lg`}
                        >
                            <CreditCardIcon/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-dark">
                            2. Pesan & Bayar
                        </h3>
                        <p className={textColorMuted}>
                            Pesan makanan pilihan Anda dan bayar dengan aman langsung di aplikasi.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="p-6">
                        <div
                            className={`flex items-center justify-center h-20 w-20 rounded-full ${secondaryColor} text-white mx-auto mb-4 shadow-lg`}
                        >
                            <ShoppingBagIcon/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-dark">
                            3. Ambil & Nikmati
                        </h3>
                        <p className={textColorMuted}>
                            Ambil pesanan Anda di lokasi penjual pada waktu yang ditentukan.
                            Nikmati!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Step;
