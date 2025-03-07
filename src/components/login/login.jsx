import { useState } from "react";
import "./../register/register.css";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo-aquellare-app.png";
import { loginWithEmailAndPassword } from "../../firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    contrasena: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.contrasena)
      newErrors.contrasena = "La contraseña es obligatoria.";
    if (!formData.email)
      newErrors.email = "El correo electrónico es obligatorio.";
    return newErrors;
  };

  const handleSave = async () => {
    const { user, error } = await loginWithEmailAndPassword({
      email: formData.email,
      password: formData.contrasena,
    });

    if (user) {
      sessionStorage.setItem("data", JSON.stringify(user));

      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      if (error.errorCode === "auth/invalid-credential") {
        setErrors({
          ...errors,
          authentication:
            "Esta cuenta no esta registrada o sus credenciales son incorrectas",
        });
      }
    }
  };

  const validarFormulario = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    handleSave();
  };

  return (
    <>
      <section className="register-body">
        <section className="body-register">
          <h2>Iniciar Sesión</h2>
          <div className="container-avatares">
            <div className="container-avatares_avatar">
              <img src={logo} alt="logo-aquelarre" />
            </div>
          </div>

          <form
            className="form-register"
            action="#"
            method="post"
            onSubmit={validarFormulario}
          >
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInputChange}
              required
            />
            <span style={{ color: "red" }}>{errors.email}</span>
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              onChange={handleInputChange}
              required
            />
            <span style={{ color: "red" }}>{errors.contrasena}</span>

            <button type="submit">
              <strong>Entrar</strong>
            </button>
            <a onClick={() => navigate("/register")}>Aun no tengo cuenta</a>
          </form>
          <span style={{ color: "red" }}>{errors.authentication}</span>

          {success && <p>Inicio Exitoso!</p>}
        </section>
      </section>
    </>
  );
};

export default Login;
