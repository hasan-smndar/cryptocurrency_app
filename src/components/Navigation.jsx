import React from "react";
import Links from "./Links";
import Logo from "./Logo";
const Navigation = () => {
  return (
    <div className="h-full w-72 fixed border-r-2 ">
      <div className="logo flex items-center justify-center py-8">
        <Logo />
      </div>
      <div className="px-2">
        <Links />
      </div>
    </div>
  );
};

export default Navigation;
