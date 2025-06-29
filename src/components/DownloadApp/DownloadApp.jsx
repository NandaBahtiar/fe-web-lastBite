import React from 'react';

const DownloadApp = () => {
    return (
        <section id="download" class="bg-white py-20">
            <div class="container mx-auto px-6 text-center">
                 <h2 class="text-3xl md:text-4xl font-bold text-primary">It All Starts With One App</h2>
                 <p class="text-muted mt-4 mb-10 max-w-2xl mx-auto">
                     For food lovers and businesses alike, registration and discovery happen right in the app. Download now to join our community!
                 </p>
                 <div class="flex justify-center items-center flex-wrap gap-4">
                     <a href="#" class="transform hover:scale-105 transition-transform">
                        <img src="https://placehold.co/180x60/000000/FFFFFF?text=Get+it+on+Google+Play" alt="Get it on Google Play" class="h-14" />
                     </a>
                     <a href="#" class="transform hover:scale-105 transition-transform">
                        <img src="https://placehold.co/180x60/000000/FFFFFF?text=Download+on+the+App+Store" alt="Download on the App Store" class="h-14" />
                     </a>
                 </div>
            </div>
        </section>
    );
};

export default DownloadApp;