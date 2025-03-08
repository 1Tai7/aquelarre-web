import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Modal from "./Modal";

vi.mock("../../firebase/post", () => ({
  createPost: vi.fn().mockResolvedValue(true),
}));

describe("Modal Component", () => {
  beforeEach(() => {
    sessionStorage.setItem(
      "data",
      JSON.stringify({ uid: "123", displayName: "TestUser" })
    );
  });

  test("renders modal when button is clicked", () => {
    render(<Modal />);

    const openButton = screen.getByText(/Crear Post/i);
    fireEvent.click(openButton);

    expect(screen.getByPlaceholderText(/Título/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/#tag, #example, #horror/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/¿Qué nos quieres contar?/i)
    ).toBeInTheDocument();
  });

  test("displays validation errors when submitting empty form", async () => {
    render(<Modal />);

    fireEvent.click(screen.getByText(/Crear/i));

    expect(screen.getByTestId("errorTitulo")).toBeInTheDocument();
  });
  test("creates a post successfully", async () => {
    render(<Modal />);

    const openModalButton = screen.getByText(/Crear Post/i);
    expect(openModalButton).toBeInTheDocument();
    fireEvent.click(openModalButton);

    const titleInput = screen.getByPlaceholderText(/Título/i);
    const tagInput = screen.getByPlaceholderText(/#tag, #example, #horror/i);
    const textArea = screen.getByPlaceholderText(/¿Qué nos quieres contar?/i);

    fireEvent.change(titleInput, { target: { value: "Test Post" } });
    fireEvent.change(tagInput, { target: { value: "#tag1, #tag2" } });
    fireEvent.change(textArea, {
      target: { value: "Este es un post de prueba" },
    });

    expect(titleInput.value).toBe("Test Post");

    expect(tagInput.value).toBe("#tag1, #tag2");

    expect(textArea.value).toBe("Este es un post de prueba");
  });
});
