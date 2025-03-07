// Header.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Modal from "./../modal/modal";
import { vi } from "vitest";
import Header from "./header";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  BrowserRouter: ({ children }) => <div>{children}</div>, // Simula BrowserRouter
}));

vi.mock("../modal/modal", () => ({
  default: vi.fn(() => <div data-testid="mock-modal">Mock Modal</div>),
}));

describe("Header Component", () => {
  let navigate;

  beforeEach(() => {
    navigate = vi.fn();
    useNavigate.mockReturnValue(navigate);
    sessionStorage.clear();
  });

  it("renders the logo and title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText("logo-aquelarre")).toBeInTheDocument();
    expect(screen.getByText("Aquelarre")).toBeInTheDocument();
  });

  it("navigates to home when logo is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByAltText("logo-aquelarre").parentElement);
    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("renders register and login buttons when not logged in", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Registrarse")).toBeInTheDocument();
    expect(screen.getByText("Iniciar Sesion")).toBeInTheDocument();
  });

  it("navigates to register when register button is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Registrarse"));
    expect(navigate).toHaveBeenCalledWith("/register");
  });

  it("navigates to login when login button is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Iniciar Sesion"));
    expect(navigate).toHaveBeenCalledWith("/login");
  });

  it("renders profile and modal when logged in", () => {
    sessionStorage.setItem("data", "test-data");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(screen.getByTestId("mock-modal")).toBeInTheDocument();
  });

  it("navigates to perfil when perfil button is clicked", () => {
    sessionStorage.setItem("data", "test-data");
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText("Perfil"));
    expect(navigate).toHaveBeenCalledWith("/perfil");
  });

  it("renders search bar", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText("# palabra clave")).toBeInTheDocument();
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
});
