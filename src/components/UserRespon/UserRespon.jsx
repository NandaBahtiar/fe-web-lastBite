import React from "react";

const UserRespon = () => {
    return (
        <section id="testimonials" class="py-20">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
                        What They Say
                    </h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <p class="text-muted italic mb-4">
                            "LastBite helps me as a student to eat well without overspending.
                            There are many choices and the prices are very affordable!"
                        </p>
                        <div class="flex items-center">
                            <img
                                src="https://placehold.co/50x50/FF6B35/FFFFFF?text=A"
                                alt="User Avatar"
                                class="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p class="font-semibold">Pahmi - Sewa Motor</p>
                                <p class="text-muted text-sm">LastBite User</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-lg">
                        <p class="text-muted italic mb-4">
                            "This app is a smart solution to reduce leftover bread in our shop
                            every day. The process is easy and the team is very supportive."
                        </p>
                        <div class="flex items-center">
                            <img
                                src="https://placehold.co/50x50/2ECC71/FFFFFF?text=B"
                                alt="Partner Avatar"
                                class="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <p class="font-semibold">Mrs. Budi - Budi Bakery</p>
                                <p class="text-muted text-sm">LastBite Partner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserRespon;
