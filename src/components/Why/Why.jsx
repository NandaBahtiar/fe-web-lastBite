import React from "react";
import Image from "../../assets/image.png";
const WalletIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const StoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6"
    />
  </svg>
);

const Why = () => {
  // Define a primary color to be reused, similar to the original 'bg-primary'
  const primaryColor = "bg-green-500";
  const textColorMuted = "text-gray-600";
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Why LastBite?
          </h2>
          <div className="space-y-8">
            {/* Feature 1: Save Money */}
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${primaryColor} text-white flex items-center justify-center text-xl`}
              >
                <WalletIcon />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Save Money
                </h4>
                <p className={textColorMuted}>
                  Enjoy quality food at a much lower price.
                </p>
              </div>
            </div>

            {/* Feature 2: Save the Environment */}
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${primaryColor} text-white flex items-center justify-center text-xl`}
              >
                <LeafIcon />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Save the Environment
                </h4>
                <p className={textColorMuted}>
                  Every order you make helps reduce food waste and your carbon
                  footprint.
                </p>
              </div>
            </div>

            {/* Feature 3: Support Local SMEs */}
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full ${primaryColor} text-white flex items-center justify-center text-xl`}
              >
                <StoreIcon />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900">
                  Support Local SMEs
                </h4>
                <p className={textColorMuted}>
                  Help local culinary businesses turn potential losses into
                  profits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://placehold.co/600x450/2ECC71/FFFFFF?text=LastBite+App"
            alt="LastBite App Preview"
            className="rounded-xl shadow-2xl w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x450/cccccc/ffffff?text=Image+Not+Found";
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Why;
