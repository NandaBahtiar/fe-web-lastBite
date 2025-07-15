import React from 'react';

const DownloadApp = () => {
    return (
        <section id="download" className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Semuanya Dimulai Dengan Satu Aplikasi</h2>
                <p className="text-muted mt-4 mb-10 max-w-2xl mx-auto">
                    Untuk pecinta makanan dan pelaku bisnis, pendaftaran dan penemuan terjadi langsung di aplikasi.
                    Unduh sekarang untuk bergabung dengan komunitas kami!
                </p>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    <a href="#" className="transform hover:scale-105 transition-transform">
                        <img src="https://placehold.co/180x60/000000/FFFFFF?text=Download"
                             alt="Tersedia di Google Play" className="h-14"/>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default DownloadApp;