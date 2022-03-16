import React from "react";
import Info from "./Info";
const GlobalState = ({ list }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-5">
      {list?.map((item) => {
        return <Info key={item.id} title={item?.text} number={item?.value} />;
      })}
    </div>
  );
};

export default GlobalState;
