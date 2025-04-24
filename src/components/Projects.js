import Animadle from "../images/animadle.png";
import ReactChiquito from "../images/reactchiquito.png";
import Mui from "../images/mui.png";
import Tood from "../images/tood.png";
import Firebase from "../images/firebase.png";
import Techfix from "../images/techfixapp.png";
import Node from "../images/node.png";
import Mongo from "../images/mongodbicon.png";
import findflix from "../images/findflix.png";
import redlimit from "../images/redlimit.jpg";
import tmdb from "../images/tmdb.png";
import firechat from "../images/firechat.png";
import resdev from '../images/resdev.png'
import JS from "../images/javascript.png";
import PHP from "../images/PHP.png";
import html from "../images/html.png";
import css from "../images/css.png";
import ANGULAR from '../images/angular.png'
import TS from '../images/ts.webp'
import qdp from '../images/qdp.png'
import liga from '../images/liga.png'

const Projects = () => {
  return (
    <>
      <div className="background"></div>
      <section className="projects bd-grid">
        <div className="main-title">
          <h1>Proyectos</h1>
        </div>
        <ul className="projects_list">
        <li className="links">
            <a
              target="_blank"
              href="https://ligachivilcoyana.com.ar/ligas"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <img src={liga} alt="todo"/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Liga Chivilcoyana</h2>
                  </div>
                  <div className="projects_data-leng">
                    <img src={ReactChiquito} width="50px" alt="javascript"/>
                    <img src={Node} width="50px" alt="html"/>
                  </div>
                  <div className="projects_data-desc">
                    Aplicación web para la gestión de la liga chivilcoyana de voley. Desarrollada junto al equipo de Resolve Dev.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="links">
            <a
              target="_blank"
              href="https://resolvedev.com"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <img src={resdev} alt="todo"/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Resolve Dev</h2>
                  </div>
                  <div className="projects_data-leng">
                    <img src={JS} width="50px" alt="javascript"/>
                    <img src={html} width="50px" alt="html"/>
                    <img src={css} width="50px" alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Sitio web de mi equipo de desarrolladores donde ofrecemos servicios
                    de desarrollo web, creación de tiendas online y desarrollo a medida.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="links">
            <a
              target="_blank"
              href="https://quedeporte.com.ar"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <img src={qdp} alt="todo"/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>QueDeporte</h2>
                  </div>
                  <div className="projects_data-leng">
                    <img src={ANGULAR} width="50px" alt="javascript"/>
                    <img src={TS} width="50px" alt="javascript"/>
                    <img src={Node} width="50px" alt="javascript"/>
                    <img src={Mongo} width="50px" alt="javascript"/>
                    <img src={html} width="50px" alt="html"/>
                    <img src={css} width="50px" alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Buscador de centros deportivos y profesionales del deporte.
                    Participo en el desarrollo actualmente junto a otros desarrolladores.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="links">
            <a
                target="_blank"
                href="https://findflix.vercel.app/"
                rel="noreferrer"
              >
                <div className="projects_data">
                  <div className="projects_data-images">
                    <img src={findflix} alt="findflix"/>
                  </div>
                  <div className="projects_data-info">
                    <article>
                      <div className="projects_data-title">
                        <h2>FindFlix</h2>
                      </div>
                      <div className="projects_data-leng">
                        <img src={ReactChiquito} width="50px" alt="react"/>
                        <img src={tmdb} width="50px" alt="tmdb"/>
                      </div>
                      <div className="projects_data-desc">
                        App divertida para encontrar información, servicios de streaming
                        y muchas cosas más de tus películas favoritas.
                      </div>
                      <div className="projects_data-responsive">
                        <p>Responsive</p>
                      </div>
                    </article>
                  </div>
                </div>
            </a>
          </li>

          <li className="links">
            <a
              target="_blank"
              href="https://digitalredlimit.com"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <img src={redlimit} alt="todo"/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Digital Red Limit</h2>
                  </div>
                  <div className="projects_data-leng">
                    <img src={PHP} width="50px" alt="php"/>
                    <img src={JS} width="50px" alt="javascript"/>
                    <img src={html} width="50px" alt="html"/>
                    <img src={css} width="50px" alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Sitio web para agencia de marketing, desarrollada por Resolve Dev.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="links">
            <a
              href="https://animadle.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <img src={Animadle} alt="animadle"/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Animadle</h2>
                  </div>
                  <div className="projects_data-leng">
                    <img src={ReactChiquito} width="50px" alt="react"/>
                    <img src={Mui} width="50px" alt="mui"/>
                  </div>
                  <div className="projects_data-desc">
                    Juego al estilo wordle, donde deberás adivinar el animal de 5
                    letras.
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
