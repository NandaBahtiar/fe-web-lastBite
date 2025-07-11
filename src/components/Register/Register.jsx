import React from "react";

const Register = () => {
  return (
    <div className="bg-background p-8 rounded-lg text-center py-16">
      <h2 className="text-3xl font-bold text-text mb-4">
        Turn Surplus Food Into Profit
      </h2>
      <p className="text-muted mb-8 max-w-2xl mx-auto">
        Have leftover, sellable food at the end of the day? Don't throw it away!
        Join LastBite and earn extra income while helping the environment.
      </p>
      <button className="bg-primary hover:bg-[#28B463] text-light font-bold py-3 px-8 rounded-full transition-colors duration-300">
        Register in the App
      </button>
    </div>
  );
};
export default Register;
