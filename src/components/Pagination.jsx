import clsx from "clsx";
import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const Pagination = ({ setPagination, page, next, prev, len }) => {
  return (
    <div>
      <div className="flex justify-center space-x-2">
        <button
          click={prev}
          disabled={parseInt(page) === 1}
          className="hover:bg-yellow-200 rounded-full w-10 h-10 grid justify-center items-center border border-yellow-900 disabled:bg-gray-300 disabled:border-0"
        >
          <AiOutlineLeft />
        </button>
        {Array.from({ length: len }, (_, i) => i + 1).map((value) => {
          return (
            <button
              onClick={() => setPagination(value)}
              key={value}
              className={clsx(
                "text-base rounded-full ",
                "sm:block w-10 h-10",
                "border border-yellow-900 hover:bg-yellow-200",
                " transition-all duration-200 ease-linear",
                parseInt(page) === value && "bg-yellow-200"
              )}
            >
              <span>{value}</span>
            </button>
          );
        })}
        <button
          click={next}
          disabled={parseInt(page) === len}
          className="hover:bg-yellow-200 rounded-full w-10 h-10 grid justify-center items-center border border-yellow-900  disabled:bg-gray-300 disabled:border-0"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
