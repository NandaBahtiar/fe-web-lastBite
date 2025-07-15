import React from "react";

const Register = () => {
    return (
        <div className="bg-background p-8 rounded-lg text-center py-16">
            <h2 className="text-3xl font-bold text-text mb-4">
                Ubah Kelebihan Makanan Menjadi Keuntungan
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
                Punya sisa makanan yang masih layak jual di akhir hari? Jangan dibuang!
                Bergabunglah dengan LastBite dan dapatkan penghasilan tambahan sambil membantu lingkungan.
            </p>
            <a href="#contact"
               className="bg-primary hover:bg-[#28B463] text-light font-bold py-3 px-8 rounded-full transition-colors duration-300">
                Daftar di Aplikasi
            </a>
        </div>
    );
};
export default Register;
