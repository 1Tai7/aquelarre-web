import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Post from "./post";
import { describe, test, expect } from "vitest";

const mockLocationState = {
  state: {
    title: "Título de prueba",
    text: "Este es un texto de prueba para el post.",
    autor: "autor_prueba",
    tags: ["#prueba", "#vitest", "#testeo"],
  },
};

describe("Post Component", () => {
  test("renderiza correctamente con los datos proporcionados", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: "/post", ...mockLocationState }]}
      >
        <Routes>
          <Route path="/post" element={<Post />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Post")).toBeInTheDocument();
    expect(screen.getByText("Título de prueba")).toBeInTheDocument();
    expect(screen.getByText("@autor_prueba")).toBeInTheDocument();
    expect(
      screen.getByText("Este es un texto de prueba para el post.")
    ).toBeInTheDocument();
    expect(screen.getByText("#prueba")).toBeInTheDocument();
    expect(screen.getByText("#vitest")).toBeInTheDocument();
    expect(screen.getByText("#testeo")).toBeInTheDocument();
  });
});
