import Animadle from "../images/animadle.png";
import ReactChiquito from "../images/reactchiquito.png";
import Mui from "../images/mui.png";
import Tood from "../images/tood.png";
import Firebase from "../images/firebase.png";
import Techfix from "../images/techfixapp.png";
import Node from "../images/node.png";
import Mongo from "../images/mongodbicon.png";
import findflix from "../images/findflix.png";
import tmdb from "../images/tmdb.png";
import firechat from "../images/firechat.png";
import { useState, useEffect } from "react";

const Projects = () => {

  const [repos, setRepos] = useState([]);
    
  useEffect(() => {
      fetch('https://api.github.com/users/juanib12/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  })

  console.log(repos)

  return (
    <>
      <div className="background"></div>
      <section className="projects bd-grid">
        <div className="main-title">
          <h1>Proyectos ✅</h1>
        </div>
        <div className="projects_list">
        <a
            target="_blank"
            href="https://findflix.vercel.app/"
            className="links"
            rel="noreferrer"
          >
            <div className="projects_data">
              <div className="projects_data-images">
                <img src={findflix} alt="findflix"/>
              </div>
              <div className="projects_data-info">
                <div className="projects_data-title">
                  <h2>FindFlix</h2>
                </div>
                <div className="projects_data-responsive">
                  <p>Responsive</p>
                </div>
                <div className="projects_data-leng">
                  <img src={ReactChiquito} width="50px" alt="react"/>
                  <img src={tmdb} width="50px" alt="tmdb"/>
                </div>
                <div className="projects_data-desc">
                  App divertida para encontrar información, servicios de streaming
                  y muchas cosas más de tus películas favoritas.
                </div>
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://toodnotes.vercel.app/"
            className="links"
            rel="noreferrer"
          >
            <div className="projects_data">
              <div className="projects_data-images">
                <img src={Tood} alt="todo"/>
              </div>
              <div className="projects_data-info">
                <div className="projects_data-title">
                  <h2>Tood - Notes</h2>
                </div>
                <div className="projects_data-responsive">
                  <p>Responsive</p>
                </div>
                <div className="projects_data-leng">
                  <img src={ReactChiquito} width="50px" alt="react"/>
                  <img src={Mui} width="50px" alt="mui"/>
                  <img src={Firebase} width="50px" alt="firebase"/>
                </div>
                <div className="projects_data-desc">
                  App donde podrás añadir, editar o eliminar tus notas y marcarlas
                  como completado.
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://animadle.vercel.app/"
            target="_blank"
            className="links"
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

          <a
            target="_blank"
            href="https://techfix-demo.vercel.app/"
            className="links"
            rel="noreferrer"
          >
            <div className="projects_data">
              <div className="projects_data-images">
                <img src={Techfix} alt="techfix"/>
              </div>
              <div className="projects_data-info">
                <div className="projects_data-title">
                  <h2>Techfix</h2>
                </div>
                <div className="projects_data-leng">
                  <img src={ReactChiquito} width="50px" alt="react"/>
                  <img src={Mui} width="50px" alt="mui"/>
                  <img src={Mongo} width="50px" alt="mongo"/>
                  <img src={Node} width="50px" alt="node"/>
                </div>
                <div className="projects_data-desc">
                  App donde podrás añadir, editar o eliminar tus servicios para tu
                  negocio de servicio técnico.
                </div>
              </div>
            </div>
          </a>

          <a
            target="_blank"
            href="https://juani-chat-app.vercel.app/"
            className="links"
            rel="noreferrer"
          >
            <div className="projects_data">
              <div className="projects_data-images">
                <img src={firechat} alt="firechat"/>
              </div>
              <div className="projects_data-info">
                <div className="projects_data-title">
                  <h2>FireChat</h2>
                </div>
                <div className="projects_data-responsive">
                  <p>Responsive</p>
                </div>
                <div className="projects_data-leng">
                  <img src={ReactChiquito} width="50px" alt="react"/>
                  <img src={Firebase} width="50px" alt="firebase"/>
                </div>
                <div className="projects_data-desc">
                  Una app para enviar y recibir mensajes en tiempo real a los
                  usuarios que esten registrados.
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
