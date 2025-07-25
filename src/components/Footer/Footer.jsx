import React from "react";

const Footer = () => {
  return (
    <footer id="contact" class="bg-gray-900 text-white">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-2xl font-bold mb-2">
              LastBite<span class="text-secondary">.</span>
            </h3>
            <p class="text-gray-400 max-w-md">
              A digital platform to save delicious surplus food, connecting
              culinary businesses with smart flavor hunters.
            </p>
            <p class="text-gray-500 text-sm mt-4">
              Developed by{" "}
              <a href="#" class="hover:text-secondary">
                Enigma Camp
              </a>
            </p>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-4">Links</h4>
            <ul class="space-y-2">
              <li>
                <a href="#how-it-works" class="text-gray-400 hover:text-white">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#for-partners" class="text-gray-400 hover:text-white">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-lg mb-4">Contact Us</h4>
            <ul class="space-y-2 text-gray-400">
              <li>
                <i class="fas fa-envelope mr-2"></i> support@lastbite.com
              </li>
              <li>
                <i class="fas fa-phone mr-2"></i> (021) 123-4567
              </li>
            </ul>
            <div class="flex space-x-4 mt-6">
              <a href="#" class="text-gray-400 hover:text-white text-2xl">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white text-2xl">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-white text-2xl">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 LastBite by Enigma Camp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
