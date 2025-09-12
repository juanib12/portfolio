import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const [active, setActive] = useState({
    about: '',
    projects: '',
    contact: '',
    blog: ''
  })
  const [style, setStyle] = useState(undefined)

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

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="l-header" style={{background: style}}>
      <nav className="nav bd-grid">
        <div>
          <Link href="/" className="nav__logo" onClick={((e) => onClick(''))}>
            <Image src="/images/jb.png" alt="logo" width={32} height={32}/>
          </Link>
        </div>

        <ul className="nav__list">
          <li className="nav__item">
            {router.pathname !== "/" ? (
              <Link href="/" className={`nav__link ${active.about}`} onClick={((e) => onClick('about'))} >
                🏠
              </Link>
            ) : (
              <a href="#sobremi" className={`nav__link ${active.about}`} onClick={((e) => onClick('about'))} >
                🏠
              </a>
            )}
          </li>
          <li className="nav__item">
            <Link href="/projects" className={`nav__link ${active.projects}`} onClick={((e) => onClick('projects'))} >
              Proyectos
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/blog" className={`nav__link ${active.blog}`} onClick={((e) => onClick('blog'))} >
              Blog
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/contact" className={`nav__link ${active.contact}`} onClick={((e) => onClick('contact'))} >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
