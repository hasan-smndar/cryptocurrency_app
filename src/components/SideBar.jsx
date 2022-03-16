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
        "w-full h-full fixed top-0 bg-white lg:hidden z-20",
        "transition-all duration-300 ease-linear",
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
          <section className="py-5 px-10">
            <Links />
          </section>
        </div>
      </Container>
    </section>
  );
};

export default SideBar;
