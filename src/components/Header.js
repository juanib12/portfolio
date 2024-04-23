import { useState } from "react";
import JB from "../images/jb.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [active, setActive] = useState({
    about: '',
    projects: '',
    contact: ''
  })
  const [style, setStyle] = useState("")

  const onClick = (name) => {
    setActive({
      [name]: 'active'
    });
  }
  
  const onScroll = () => {
    if((window.scrollY === 0)) {
      setStyle("transparent");
    } else {
      setStyle("#000");
    }
  }

  window.addEventListener('scroll', onScroll)

  return (
    <header className="l-header" style={{background: style}}>
      <nav className="nav bd-grid">
        <div>
          <Link to="/" className="nav__logo" onClick={((e) => onClick(''))}>
            <img src={JB} alt="logo"/>
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            {location.pathname !== "/" ? (
              <Link to="/" className={`nav__link ${active.about}`} onClick={((e) => onClick('about'))} >
                Sobre m&iacute;
              </Link>
            ) : (
              <a href="#sobremi" className={`nav__link ${active.about}`} onClick={((e) => onClick('about'))} >
                Sobre m&iacute;
              </a>
            )}
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
