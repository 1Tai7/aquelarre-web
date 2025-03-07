import { useEffect, useState } from "react";
import "./foro.css";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../firebase/post";

const Foro = () => {
  const navigate = useNavigate();
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    const getAllData = async () => {
      setLoading(true); // Inicia el loader
      try {
        const data = await getPosts();
        setPost(data || []);
      } catch (error) {
        console.error("Error al obtener los posts:", error);
        // Manejar el error adecuadamente (mostrar un mensaje, etc.)
      } finally {
        setLoading(false); // Detiene el loader, independientemente del resultado
      }
    };
    getAllData();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div> {/* Agrega tu estilo de loader */}
      </div>
    );
  }

  return (
    <section>
      <h2>Foro</h2>
      <section className="container-all-posts">
        {posts &&
          posts?.map((item, index) => {
            return (
              <div
                className="post-home-container"
                key={`${index}-${item.userId}`}
              >
                <div className="header-post">
                  <h3>{item.title}</h3>
                  <h4>{`@${item?.autor}`}</h4>
                </div>
                <p>{item.text}</p>
                <div className="hashtag-button">
                  {item?.tags.map((tag, indexT) => (
                    <span key={`${tag}-${indexT}-${index}`}>{tag}</span>
                  ))}

                  <a
                    onClick={() =>
                      navigate("Post", {
                        state: {
                          title: item.title,
                          text: item.text,
                          autor: item.autor,
                          tags: item.tags,
                        },
                      })
                    }
                  >
                    Entrar al post
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="34"
                      height="34"
                      strokeWidth="2"
                    >
                      {" "}
                      <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path>{" "}
                      <path d="M6.5 12h14.5"></path>{" "}
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
      </section>
    </section>
  );
};
export default Foro;
