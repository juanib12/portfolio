import JS from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node.png";
import mysql from "../images/mysql.png";
import gh from "../images/gh.png";
import tailwind from "../images/tailwind.png";
import react from "../images/reactlogo.png";
import mongo from "../images/mongodb.png";

const Lenguagues = () => {
  return (
    <section className=" lenguagues bd-grid">
      <div className="lenguagues_title">
        <h2>
          Herramientas y{" "}
          <span style={{ color: "rgb(56 189 248)" }}>tecnologías</span> que
          actualmente utilizo
        </h2>
      </div>
      <div className="lenguagues_data">
        <div className="lenguagues_images">
          <img src={JS} />
        </div>
        <div className="lenguagues_images">
          <img src={html} />
        </div>
        <div className="lenguagues_images">
          <img src={css} />
        </div>
        <div className="lenguagues_images">
          <img src={node} />
        </div>
        <div className="lenguagues_images">
          <img src={mysql} />
        </div>
        <div className="lenguagues_images">
          <img src={gh} />
        </div>
        <div className="lenguagues_images">
          <img src={tailwind} />
        </div>
        <div className="lenguagues_images">
          <img src={react} />
        </div>
        <div className="lenguagues_images">
          <img src={mongo} />
        </div>
      </div>
      <div className="lenguagues_footer">
        <p>
          Además de estas tecnologías también he aprendido y utilizado
          <span style={{ color: "rgb(56 189 248)" }}>
            C# - C++ - C - .NET Framework - .NET Core - SQL Server.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Lenguagues;
