import Link from "next/link";

const Footer = () => {
  return (
    <section className="container footer-bg">
      <footer className="footer">
        <div className="footer-data">
          <span className="footer-title">Proyectos</span>
          <a
            className="footer-link"
            href="https://animadle.vercel.app/"
            target="__blank"
          >
            Animadle
          </a>
          <a
            className="footer-link"
            href="https://toodnotes.vercel.app/"
            target="__blank"
          >
            Tood notes
          </a>
          <a
            className="footer-link"
            href="https://techfix-demo.vercel.app/"
            target="__blank"
          >
            Techfix
          </a>
          <a
            className="footer-link"
            href="http://juani-chat-app.vercel.app/"
            target="__blank"
          >
            FireChat
          </a>

        </div>
        <div className="footer-data">
          <span className="footer-title">Sobre mí</span>
          <a
            className="footer-link"
            href="https://drive.google.com/file/d/18CQbopmULlXxoKrg-gS6MlK_gVEhaO9z/view?usp=sharing"
            target="__blank"
          >
            Descargar CV
          </a>
          <Link className="footer-link" href="/contact">
            Contacto
          </Link>
          <a
            className="footer-link"
            href="https://eljueguitodelaserpiente.vercel.app/"
            target="__blank"
          >
            Presiona aquí 😉
          </a>
        </div>
        <div className="footer-data">
          <span className="footer-title">Redes</span>
          <div className="footer-data-link">
            <i className="bx bxl-github text-xl"></i>
            <a
              className="footer-link "
              href="https://github.com/juanib12"
              target="__blank"
            >
              Github
            </a>
          </div>
          <div className="footer-data-link">
            <i className="bx bxl-instagram-alt text-xl"></i>
            <a
              className="footer-link"
              href="https://www.instagram.com/bianco_juani/"
              target="__blank"
            >
              Instagram
            </a>
          </div>
          <div className="footer-data-link">
            <i className="bx bxl-linkedin-square text-xl"></i>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/juanignaciobianco/"
              target="__blank"
            >
              Linkedin
            </a>
          </div>
          <div className="footer-data-link">
            <i className="bx bxl-gmail text-xl"></i>
            <p>bjuan.ignacio11@gmail.com</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
