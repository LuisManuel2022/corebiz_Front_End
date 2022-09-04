import React from "react";
import Cart from "../Cart";
import Logo from "../img/logo_corebiz.png";
import Hamburguesa from "../img/hamburguer.png";
import Lupa from "../img/buscar.png";
import Account from "../img/login.png";
import "./Nav.css";

const Navega = () => {
  return (
    <div className="main-desk">
      <div className="log">
        <img src={Logo} alt="logo" />
      </div>
      <div className="buscar">
      <input className="search" type="input" placeholder="¿Qué estás buscando?" />
        <img className="img-search" src={Lupa} alt="lup" />
      </div>
      <div className="cuenta">
        <img src={Account} alt="acco" />
        <span>Mi Cuenta</span>
      </div>
      <div className="cart">
        <Cart />
      </div>
      <div className="main-responsive">
        <div className="hamburguer">
          <image src={Hamburguesa} alt="hamb" />
        </div>
        <div className="log">
          <img src={Logo} alt="logo" />
        </div>
        <div className="cart">
          <Cart />
        </div>
        <div className="buscar">
        <input type="text" placeholder="¿Qué estás buscando?" size={50} />
        <img src={Lupa} alt="lup" />
      </div>
      </div>
    </div>
  );
};

export default Navega;
