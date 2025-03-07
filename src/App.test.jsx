// App.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Post from "./components/post/post";
import Perfil from "./components/Perfil/perfil";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// Mock components
vi.mock("./components/home/home", () => ({
  default: () => <div data-testid="home">Home</div>,
}));
vi.mock("./components/register/register", () => ({
  default: () => <div data-testid="register">Register</div>,
}));
vi.mock("./components/login/login", () => ({
  default: () => <div data-testid="login">Login</div>,
}));
vi.mock("./components/post/post", () => ({
  default: () => <div data-testid="post">Post</div>,
}));
vi.mock("./components/Perfil/perfil", () => ({
  default: () => <div data-testid="perfil">Perfil</div>,
}));
vi.mock("./components/header/header", () => ({
  default: () => <div data-testid="header">Header</div>,
}));
vi.mock("./components/footer/footer", () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe("App Component", () => {
  it("renders Header and Footer", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("renders Home component on / route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  it("renders Register component on /register route", () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("register")).toBeInTheDocument();
  });

  it("renders Login component on /login route", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("login")).toBeInTheDocument();
  });

  it("renders Post component on /post route", () => {
    render(
      <MemoryRouter initialEntries={["/post"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("post")).toBeInTheDocument();
  });

  it("renders Perfil component on /perfil route", () => {
    render(
      <MemoryRouter initialEntries={["/perfil"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("perfil")).toBeInTheDocument();
  });
});
