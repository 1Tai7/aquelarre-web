import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo-aquellare-app.png";
import "./header.css";
import Modal from "../modal/modal";

const Header = () => {
  const navigate = useNavigate();
  const data = sessionStorage.getItem("data");

  const handleHome = () => {
    navigate("/");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <header>
        <div className="header-logo" onClick={() => handleHome()}>
          <img src={logo} alt="logo-aquelarre" />
          <h1>Aquelarre</h1>
        </div>
        <div className="header-search-bar">
          <input type="search" role="search" placeholder="# palabra clave" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            strokeWidth="2"
          >
            {" "}
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>{" "}
            <path d="M21 21l-6 -6"></path>{" "}
          </svg>
        </div>
        <div className="header-options">
          {data ? (
            <>
              <button onClick={() => navigate("/perfil")}> Perfil</button>
              <Modal />
            </>
          ) : (
            <>
              <button onClick={() => handleRegister()}>Registrarse</button>
              <button onClick={() => handleLogin()}>Iniciar Sesion</button>{" "}
            </>
          )}
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
