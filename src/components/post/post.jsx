import { useLocation } from "react-router-dom";
import "./post.css";

const Post = () => {
  const location = useLocation();

  const { title, text, autor, tags } = location.state;

  return (
    <>
      <section className="body-post-container">
        <div className="post-container">
          <h2>Post</h2>
          <div className="header-post">
            <h3>{title}</h3>
            <h4>@{autor}</h4>
          </div>
          <p>{text}</p>
          <div className="hashtag-button">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Post;
