import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import clsx from "clsx";
const BarButton = ({ click }) => {
  return (
    <div>
      <button
        className={clsx(
          "text-3xl font-semibold  p-0.5 rounded text-gray-900",
          "hover:bg-gray-200 focus:ring focus:ring-yellow-900/40",
          "transition duration-200 ease-linear"
        )}
        onClick={click}
      >
        <AiOutlineBars />
      </button>
    </div>
  );
};

export default BarButton;
