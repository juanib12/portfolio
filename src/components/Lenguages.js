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
import net from '../images/net.png'
import sql from '../images/sql.png'
import git from '../images/git.png'
import vscode from '../images/vscode.png'
import vs from '../images/vs.png'
import csharp from '../images/csharp.png'

const Lenguagues = () => {
  return (
    <section className=" lenguagues">
      
      <div className="lenguagues_title">
        <h2>
          Herramientas y
          <span style={{ color: "rgb(56 189 248)" }}> tecnologías</span> que
          actualmente utilizo
        </h2>
      </div>

      <ul id="cards" data-numcards="6" className="lenguagues_data">
        <li className="card-title">
          <header>
            <strong>Frontend</strong>
          </header>
        </li>
        <li className="card" id="card_8">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={react} alt="react"/>
            </div>
          </div>
        </li>        
        <li className="card" id="card_9">
          <div className="card__content">
            <div className="lenguagues_images">
              <img style={{width: "256px"}} src={angular} alt="angular"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_1">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={JS} alt="js"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={html} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={css} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_7">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={tailwind} alt="lenguage-img"/>
            </div>
          </div>
        </li>
      </ul>
      <ul id="cards" data-numcards="3" className="lenguagues_data">
        <li className="card-title">
          <header>
            <strong>Backend</strong>
          </header>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={node} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={net} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={csharp} alt="lenguage-img"/>
            </div>
          </div>
        </li>
      </ul>
      <ul id="cards" data-numcards="3" className="lenguagues_data">
        <li className="card-title"> 
          <header>
            <strong>Bases de datos</strong>
          </header>
        </li>
        <li className="card" id="card_5">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={mysql} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_5">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={sql} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_10">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={mongo} alt="lenguage-img"/>
            </div>
          </div>
        </li>
      </ul>
      <ul id="cards" data-numcards ="4" className="lenguagues_data">
        <li className="card-title">
          <header>
            <strong>Herramientas</strong>
          </header>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={gh} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={git} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={vscode} alt="lenguage-img"/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <img src={vs} alt="lenguage-img"/>
            </div>
          </div>
        </li>
      </ul>
      <div className="lenguagues_footer">
        <p>
          Además de estas tecnologías también he aprendido y utilizado 
          <span style={{ color: "rgb(56 189 248)" }}>
            <br></br>C++ - C - Vue.js - RethinkDB - TypeScript - Figma
          </span>
        </p>
      </div>
    </section>
  );
};

export default Lenguagues;
