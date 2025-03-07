import { useState } from "react";
import "./perfil.css";
import { useNavigate } from "react-router-dom";
import { updateWithEmailAndPassword } from "../../firebase/auth";

const Perfil = () => {
  const navigate = useNavigate();
  const data = JSON.parse(sessionStorage.getItem("data") || {});
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(
    data?.imageUrl || data?.photoURL
  );
  console.log("data", data);
  const [formData, setFormData] = useState({
    nombre: data?.name,
    alias: data?.displayName,
    contrasena: data?.password,
    email: data?.email,
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
    const { user } = await updateWithEmailAndPassword({
      email: formData.email,
      password: formData.contrasena,
      displayName: formData.alias,
      photoUrl: selectedEmoji,
      name: formData.nombre,
    });

    if (user) {
      sessionStorage.setItem("data", JSON.stringify(user));
      navigate("/");
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
    setSuccess(true);
    handleSave();
  };

  return (
    <>
      <section className="register-body">
        <section className="body-register">
          <h2>Perfil</h2>
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
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.nombre}</span>

            <label htmlFor="alias">Alias:</label>
            <input
              type="text"
              id="alias"
              name="alias"
              value={formData.alias}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.alias}</span>

            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.contrasena}</span>

            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span style={{ color: "red" }}>{errors.email}</span>

            <button type="submit">
              <strong>Actualizar Perfil</strong>
            </button>
            {success && <p>Registro Exitoso!</p>}
          </form>
          <button
            onClick={() => {
              sessionStorage.clear();
              navigate("/");
            }}
          >
            Cerrar sesion
          </button>
        </section>
      </section>
    </>
  );
};

export default Perfil;
