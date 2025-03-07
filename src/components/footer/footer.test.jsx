import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Footer Component", () => {
  it("renders the footer with the correct text and link", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo"); // Usa getByRole para accesibilidad
    const apprenticeText = screen.getByText(/Aprendiz:/i);
    const linkElement = screen.getByRole("link", { name: /Ilce Garcia/i });

    expect(footerElement).toBeInTheDocument();
    expect(apprenticeText).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "https://github.com/1Tai7");
  });

  it("contains a span with the correct text", () => {
    render(<Footer />);
    const spanElement = screen.getByText(/Aprendiz/i);
    expect(spanElement).toBeInTheDocument();
  });
});
