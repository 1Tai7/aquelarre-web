import { useState } from "react";
import "./modal.css";
import { createPost } from "../../firebase/post";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");
  const user = JSON.parse(sessionStorage.getItem("data") || {});

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    let newErrors = {};
    console.log(newErrors);
    if (!title) newErrors.title = "Agregue un titulo";
    if (!text) newErrors.text = "Agrega un mensaje";
    if (!tag) {
      newErrors.tag = "Agregue Tags";
    } else if (!tag?.includes("#")) {
      newErrors.tag = "usa #";
    } else if (!tag?.includes(",")) {
      newErrors.tag = "minimo 2 tags. separalos por , #tag, #example";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      const data = await createPost({
        userId: user.uid,
        autor: user.displayName,
        title: title,
        tags: tag,
        text: text,
      });
      if (data) {
        setErrors({});
        setSuccess(true);

        handleClose();
      }
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Crear Post</button>
      {isOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              x
            </span>

            <div className="input-info-container">
              <input
                type="text"
                placeholder="Título"
                data-testid="titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="errors" data-testid="errorTitulo">
                {errors?.title}
              </p>
              <input
                type="text"
                placeholder="#tag, #example, #horror"
                data-testid="tags"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <p className="errors" data-testid="tags">
                {errors?.tag}
              </p>
            </div>
            <div className="box-text">
              <div>
                <textarea
                  placeholder="¿Qué nos quieres contar?"
                  name="create-text-box"
                  id="create-text-box"
                  data-testid="textarea"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
                <p className="errors">{errors?.text}</p>
              </div>
              <div className="btn-text">
                <button onClick={handleSubmit}>
                  crear
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                  >
                    <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"></path>
                  </svg>
                </button>
              </div>
              {success && <span>Registro exitoso</span>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
