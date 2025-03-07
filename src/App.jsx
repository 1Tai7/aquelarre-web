import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Post from "./components/post/post";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Perfil from "./components/Perfil/perfil";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
