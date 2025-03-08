import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect, vi } from "vitest";
import Register from "./register";
// import { registerWithEmailAndPassword } from "../../firebase/auth";

//vi.mock("../../firebase/auth", () => ({
//  registerWithEmailAndPassword: vi.fn(),
//}));

describe("Register Component", () => {
  test("renders register form correctly", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByText(/Registro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Alias/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });

  test("validates empty form submission", async () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

    expect(
      await screen.findByText(/El nombre es obligatorio/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El alias es obligatorio/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/La contraseña es obligatoria/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/El correo electrónico es obligatorio/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Seleccione un icono/i)).toBeInTheDocument();
  });

  test("handles successful registration", async () => {
    // registerWithEmailAndPassword.mockResolvedValue({ user: { uid: "123" } });

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Nombre completo/i), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByLabelText(/Alias/i), {
      target: { value: "Juan123" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));
  });

  test("handles failed registration due to email already in use", async () => {
    //  registerWithEmailAndPassword.mockResolvedValue({
    //  error: { errorCode: "auth/email-already-in-use" },
    //});

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/Nombre completo/i), {
      target: { value: "Juan Pérez" },
    });
    fireEvent.change(screen.getByLabelText(/Alias/i), {
      target: { value: "Juan123" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText(/Correo electrónico/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));
  });
});
