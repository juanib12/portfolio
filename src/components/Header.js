import JB from "../images/jb.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="l-header">
      <nav class="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo">
            Juan Bianco
          </Link>
        </div>

        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/about" className="nav__link active">
              Sobre mí
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/projects" className="nav__link">
              Proyectos
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/contact" className="nav__link">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
