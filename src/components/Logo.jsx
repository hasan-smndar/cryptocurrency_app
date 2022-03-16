import React from "react";
const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="logo.svg" alt="logo crypto " className="w-10" />
      <h2 className="ml-2 text-yellow-900 text-xl sm:text-2xl font-semibold capitalize drop-shadow-sm select-none ">
        cryptoverse
      </h2>
    </div>
  );
};

export default Logo;
