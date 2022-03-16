import React from "react";
import Logo from "./Logo";
import BarButton from "./BarButton";
import useGlobalContext from "../Context/useGlobalContext";
import Container from "./Container";
const Header = () => {
  const { openSideBar } = useGlobalContext();
  return (
    <section className="shadow lg:hidden">
      <Container>
        <div className="flex justify-between items-center ">
          <Logo />
          <BarButton click={() => openSideBar()} />
        </div>
      </Container>
    </section>
  );
};

export default Header;
