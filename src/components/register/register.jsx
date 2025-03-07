import { useState } from "react";
import "./register.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(
    localStorage.getItem("avatar") || ""
  );
  const [formData, setFormData] = useState({
    nombre: "",
    alias: "",
    contrasena: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const toggleEmojiContainer = () => {
    setIsVisible((prev) => !prev);
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    localStorage.setItem("avatar", emoji);
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.alias) newErrors.alias = "El alias es obligatorio.";
    if (!formData.contrasena)
      newErrors.contrasena = "La contraseña es obligatoria.";
    if (!formData.email)
      newErrors.email = "El correo electrónico es obligatorio.";
    if (!selectedEmoji) newErrors.icon = "Seleccione un icono.";
    return newErrors;
  };

  const handleSave = async () => {
    const { user, error } = await registerWithEmailAndPassword({
      email: formData.email,
      password: formData.contrasena,
      displayName: formData.alias,
      photoUrl: selectedEmoji,
      name: formData.nombre,
    });

    if (user) {
      sessionStorage.setItem("data", JSON.stringify(user));
      setSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      if (error.errorCode === "auth/email-already-in-use") {
        setErrors({
          ...errors,
          authentication: "Esta correo ya esta en uso",
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
          <h2>Registro</h2>
          <div className="container-avatares">
            <div className="container-avatares_avatar">
              <span id="avatar-seleccionado">{selectedEmoji}</span>
              <input type="hidden" id="avatar-guardado" value={selectedEmoji} />
              <button id="mostrar-emojis" onClick={toggleEmojiContainer}>
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
                  <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2"></path>
                  <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                </svg>
              </button>
            </div>
            {isVisible && (
              <div className="avatar-container">
                {["😸", "😋", "👩", "🙆‍♀️", "💃", "👧"].map((emoji) => (
                  <span
                    key={emoji}
                    className={`emoji ${
                      selectedEmoji === emoji ? "selected" : ""
                    }`}
                    onClick={() => handleEmojiClick(emoji)}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            )}
            <span style={{ color: "red" }}>{errors.icon}</span>
          </div>

          <form
            className="form-register"
            action="#"
            method="post"
            onSubmit={validarFormulario}
          >
            <label htmlFor="nombre">
              Nombre completo: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.nombre}</span>

            <label htmlFor="alias">
              Alias: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              id="alias"
              name="alias"
              value={formData.alias}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.alias}</span>

            <label htmlFor="contrasena">
              Contraseña: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.contrasena}</span>

            <label htmlFor="email">
              Correo electrónico: <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.email}</span>

            <button type="submit">
              <strong>Enviar</strong>
            </button>
            <a onClick={() => navigate("/login")}>Ya tengo una cuenta</a>
            <span style={{ color: "red" }}>{errors.authentication}</span>

            {success && <span>Registro Exitoso!</span>}
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
