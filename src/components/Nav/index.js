import React from "react";
import Cart from "../Cart";
import Logo from "../img/logo_corebiz.png";
import Log from "./Account";
import Hamburguer from "./Hambur";
import "./Nav.css";
import SearchBar from "./Search-Bar";

const Navega = () => {
  return (
    <div className="main-mobil">
      <div className="hamburgers">
        <Hamburguer />
      </div>
      <div className="log">
        <img src={Logo} alt="logo" />
      </div>
      <SearchBar />
      <div className="login">
        <Log />
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Navega;
