import Image from "next/image";

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
              <Image src="/images/reactlogo.png" alt="react" width={100} height={100}/>
            </div>
          </div>
        </li>        
        <li className="card" id="card_9">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/angular.png" alt="angular" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_1">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/javascript.png" alt="js" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_2">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/html.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_3">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/css.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_7">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/tailwind.png" alt="lenguage-img" width={100} height={100}/>
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
              <Image src="/images/node.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/net.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_4">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/csharp.png" alt="lenguage-img" width={100} height={100}/>
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
              <Image src="/images/mysql.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_5">
          <div className="card__content">
            <div className="lenguagues_images">
            <Image src="/images/mysql.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_10">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/mongodb.png" alt="lenguage-img" width={100} height={100}/>
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
              <Image src="/images/gh.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/git.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/vscode.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
        <li className="card" id="card_6">
          <div className="card__content">
            <div className="lenguagues_images">
              <Image src="/images/vs.png" alt="lenguage-img" width={100} height={100}/>
            </div>
          </div>
        </li>
      </ul>
      <div className="lenguagues_footer">
        <p>
          Además de estas tecnologías también he aprendido y utilizado 
          <span style={{ color: "rgb(56 189 248)" }}>
            <br></br>PHP - C++ - C - Vue.js - RethinkDB - TypeScript - Figma
          </span>
        </p>
      </div>
    </section>
  );
};

export default Lenguagues;
