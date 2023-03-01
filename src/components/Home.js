import ImageTechfix from "../images/developer.png";
import Ikbal from "../images/Ikbal.png";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import Profile from '../images/profile.png'

const Home = () => {
  return (
    <section className="bd-grid">
      <div className="home">
      <img src={Profile} alt="profile" className="avatar"/>
        <div className="home_title">
          <h2>Hola! Soy</h2>
          <h1>Juan Bianco</h1>
          <h3>Full Stack Developer 💻</h3>
        </div>
        <div className="home_actions">
          <Link to="/about" className="home_actions-about">
            Sobre mí
          </Link>
          <a
            href="https://drive.google.com/file/d/1uXhbRizZkEx0LcWYqAAn8hvoHFf3swN_/view?usp=sharing"
            target="__blank"
            className="home_actions-cv"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
