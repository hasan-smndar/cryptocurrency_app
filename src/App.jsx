import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Exchanges from "./Pages/Exchanges";
import Cryptocurrency from "./Pages/Cryptocurrency";
import Cryptocurrencies from "./Pages/Cryptocurrencies";
import { SideBar, Navigation, Header } from "./components";
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <SideBar />
        <main className=" section2 lg:flex">
          <section className=" w-72 hidden  h-screen lg:block lg:relative  ">
            <Navigation />
          </section>
          <section className="section flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="Exchanges" element={<Exchanges />} />
              <Route
                path="cryptocurrency/:cryptoId"
                element={<Cryptocurrency />}
              />
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
