import JS from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import node from "../images/node.png";
import mysql from "../images/mysql.png";
import gh from "../images/gh.png";
import tailwind from "../images/tailwind.png";
import react from "../images/reactlogo.png";
import mongo from "../images/mongodb.png";
import angular from "../images/angular.png"

const Lenguagues = () => {
  return (
    <section className=" lenguagues">
      <input type="checkbox" id="debug" />
      
      <div className="lenguagues_title">
        <h2>
          Herramientas y
          <span style={{ color: "rgb(56 189 248)" }}> tecnologías</span> que
          actualmente utilizo
        </h2>
      </div>

      <ul id="cards" className="lenguagues_data">
        <li className="card" id="card_1">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={JS} />
            </div>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={html} />
            </div>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={css} />
            </div>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={node} />
            </div>
          </div>
        </li>
        <li className="card" id="card_5">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={mysql} />
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={gh} />
            </div>
          </div>
        </li>
        <li className="card" id="card_7">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={tailwind} />
            </div>
          </div>
        </li>
        <li className="card" id="card_8">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={react} />
            </div>
          </div>
        </li>        
        <li className="card" id="card_9">
          <div className="card__content">
            <div className="lenguagues_images">
              <img style={{width: "256px"}} src={angular} />
            </div>
          </div>
        </li>
        <li className="card" id="card_10">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={mongo} />
            </div>
          </div>
        </li>
      </ul>
      <div className="lenguagues_footer">
        <p>
          Además de estas tecnologías también he aprendido y utilizado 
          <span style={{ color: "rgb(56 189 248)" }}>
            <br></br>C# - C++ - C - .NET Framework - .NET Core - SQL Server.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Lenguagues;
