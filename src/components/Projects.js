import Animadle from "../images/animadle.png";
import ReactChiquito from "../images/reactchiquito.png";
import Mui from "../images/mui.png";
import Tood from "../images/tood.png";
import Firebase from "../images/firebase.png";
import Movie from "../images/movie.png";
import Styled from "../images/styled.png";
import Rick from "../images/rick.png";
import Techfix from "../images/techfixapp.png";
import Node from "../images/node.png";
import Mongo from "../images/mongodbicon.png";

const Projects = () => {
  return (
    <section className="projects bd-grid">
      <div className="projects_title">
        <h1>Proyectos ✅</h1>
      </div>
      <div className="projects_list">
        <a href="https://animadle.vercel.app/" target="_blank">
          <div className="projects_data">
            <div className="projects_data-images">
              <img src={Animadle} />
            </div>
            <div className="projects_data-info">
              <div className="projects_data-title">
                <h2>ANIMADLE</h2>
              </div>
              <div className="projects_data-leng">
                <img src={ReactChiquito} width="50px" />
                <img src={Mui} width="50px" />
              </div>
              <div className="projects_data-desc">
                Juego al estilo wordle, donde deberás adivinar el animal de 5
                letras.
              </div>
              <button>Ver más</button>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://toodnotes.vercel.app/">
          <div className="projects_data">
            <div className="projects_data-images">
              <img src={Tood} />
            </div>
            <div className="projects_data-info">
              <div className="projects_data-title">
                <h2>Tood - Notes</h2>
              </div>
              <div className="projects_data-leng">
                <img src={ReactChiquito} width="50px" />
                <img src={Mui} width="50px" />
                <img src={Firebase} width="50px" />
              </div>
              <div className="projects_data-desc">
                App donde podrás añadir, editar o eliminar tus notas y marcarlas
                como completado.
              </div>
              <button>Ver más</button>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://techfix-demo.vercel.app/">
          <div className="projects_data">
            <div className="projects_data-images">
              <img src={Techfix} />
            </div>
            <div className="projects_data-info">
              <div className="projects_data-title">
                <h2>Techfix</h2>
              </div>
              <div className="projects_data-leng">
                <img src={ReactChiquito} width="50px" />
                <img src={Mui} width="50px" />
                <img src={Mongo} width="50px" />
                <img src={Node} width="50px" />
              </div>
              <div className="projects_data-desc">
                App donde podrás añadir, editar o eliminar tus clientes,
                equipos, repuestos u ordenes de trabajo para tu negocio de
                servicio técnico.
              </div>
              <button>Ver más</button>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
