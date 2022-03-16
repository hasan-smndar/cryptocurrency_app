import React, { useState } from "react";
const GlobalContext = React.createContext();
const ContextProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currency, setCurrency] = useState({
    value: "usd",
    label: "US Dollar",
  });
  const openSideBar = () => {
    setIsSideBarOpen(true);
  };
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSideBarOpen,
        currency,
        openSideBar,
        closeSideBar,
        setCurrency,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, ContextProvider };
