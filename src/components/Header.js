import { useState } from "react";
import JB from "../images/jb.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState({
    about: '',
    projects: '',
    contact: ''
  })

  const onClick = (name) => {
    setActive({
      [name]: 'active'
    });
  }

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo" onClick={((e) => onClick(''))}>
            <img src={JB} alt="logo"/>
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/about" className={`nav__link ${active.about}`} onClick={((e) => onClick('about'))} >
              Sobre m&iacute;
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/projects" className={`nav__link ${active.projects}`} onClick={((e) => onClick('projects'))} >
              Proyectos
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className={`nav__link ${active.contact}`} onClick={((e) => onClick('contact'))} >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
