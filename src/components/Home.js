import ImageTechfix from "../images/developer.png";
import Ikbal from "../images/Ikbal.png";

const Home = () => {
  return (
    <section className="bd-grid">
      <div className="home">
        <div className="home_title">
          <h2>Hola! Soy</h2>
          <h1>Juan Bianco</h1>
          <h3>Full Stack Developer 💻</h3>
        </div>
        <div className="home_actions">
          <a href="#about" className="home_actions-about">
            Sobre mí
          </a>
          <a
            href="https://drive.google.com/file/d/1uXhbRizZkEx0LcWYqAAn8hvoHFf3swN_/view?usp=sharing"
            target="__blank"
            className="home_actions-cv"
          >
            Descargar CV
          </a>
        </div>
        <div className="home_animation">
          <img src={Ikbal} alt="image" role="img" className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Home;
