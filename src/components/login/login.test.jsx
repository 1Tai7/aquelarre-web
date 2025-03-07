import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Login from "./login";
import { loginWithEmailAndPassword } from "../../firebase/auth";

vi.mock("../../firebase/auth", () => ({
  loginWithEmailAndPassword: vi.fn(),
}));

describe("Login Component", () => {
  test("renders login form correctly", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument();
  });

  test("handles successful login", async () => {
    loginWithEmailAndPassword.mockResolvedValue({ user: { uid: "123" } });
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña:/i), {
      target: { value: "password123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Entrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Inicio Exitoso!/i)).toBeInTheDocument();
    });
  });

  test("handles failed login", async () => {
    loginWithEmailAndPassword.mockResolvedValue({
      error: { errorCode: "auth/invalid-credential" },
    });
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña:/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Entrar/i }));

    await waitFor(() => {
      expect(
        screen.getByText(
          /Esta cuenta no esta registrada o sus credenciales son incorrectas/i
        )
      ).toBeInTheDocument();
    });
  });
});
