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
          <a href="#sobremi" className="home_actions-about">
            Sobre mí
          </a>
          <Link
            to="/cv"
            className="home_actions-cv"
          >
            Descargar CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
