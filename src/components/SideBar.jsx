import React from "react";
import clsx from "clsx";
import useGlobal from "../Context/useGlobalContext";
import { Container, Logo, CloseButton } from "./index";
import Links from "./Links";
const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobal();
  return (
    <section
      className={clsx(
        " bg-gray-900/20 fixed w-full h-full top-0 left-0 transition duration-150 flex",
        { "z-40 opacity-100": isSideBarOpen },
        { "-z-10 opacity-0": !isSideBarOpen }
      )}
    >
      <div
        className={clsx(
          "bg-white lg:hidden w-72 h-full  transition-all duration-300 ease-linear",
          { "-translate-x-full": !isSideBarOpen },
          { "translate-x-0": isSideBarOpen }
        )}
      >
        <Container>
          <div>
            <header className="flex justify-between items-center">
              <Logo />
              <CloseButton click={() => closeSideBar()} />
            </header>
            <div className="py-5 px-10">
              <Links />
            </div>
          </div>
        </Container>
      </div>
      <div className=" bg-transparent flex-grow" onClick={closeSideBar}></div>
    </section>
  );
};

export default SideBar;
