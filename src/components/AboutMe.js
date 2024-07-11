import Education from "./Education";
import Lenguages from "./Lenguages";
import MyWay from "./MyWay";

const AboutMe = () => {

  return (
    <main className="bd-grid" id="sobremi">
      <section className="about" id="about">
        <div className="about-title">
          <h2>Sobre mí</h2>
        </div>
        <div className="about_data_title">
          <h2>¿Quién soy?</h2>
          <span>
            Soy un apasionado <em style={{ color: "rgb(56 189 248)" }}>desarrollador fullstack</em > cocreador de <a href="https://www.resolvedev.com/" target="_blank" style={{ color: "rgb(56 189 248)", borderBottom: "1px solid rgb(56 189 248)" }} rel="noreferrer">Resolve Dev</a>, enfocado especialmente en la creaci&oacute;n de soluciones web robustas y eficientes.
            Mi conjunto de habilidades abarca diversas tecnolog&iacute;as claves en el desarrollo moderno, desde el dinamismo y la versatilidad de <em style={{ color: "rgb(56 189 248)" }}>React.js y Angular</em>, 
            hasta el s&oacute;lido fundamento de <em style={{ color: "rgb(56 189 248)" }}>JavaScript, HTML y CSS</em>. Tengo la capacidad de crear interfaces atractivas y funcionales que cumplan con las necesidades del usuario.
            <br/><br/>
            En cuanto al backend, adquir&iacute; experiencia s&oacute;lida en <em style={{ color: "rgb(56 189 248)" }}>Node.js</em>, permiti&eacute;ndome construir aplicaciones escalables y de alto rendimiento. 
            Por otra parte, mis habilidades en <em style={{ color: "rgb(56 189 248)" }}>.NET</em> me brindan un entendimiento profundo de la estructura y la l&oacute;gica necesaria para desarrollar aplicaciones empresariales.
            <br/><br/>
            Mi objetivo es buscar la excelencia t&eacute;cnica y la eficiencia en cada uno de los proyectos en los que participo, 
            entregando soluciones de software de alta calidad que satisfagan las necesidades del cliente y superen sus expectativas.<br/>
            Adem&aacute;s de estudiar e informarme sobre el <em style={{ color: "rgb(56 189 248)" }}>mundo IT</em>, me gusta escuchar m&uacute;sica mientras
            disfruto de un rico <em style={{ color: "rgb(56 189 248)" }}>caf&eacute; ☕</em>.
          </span>
        </div>
      </section>
      <MyWay />
      <Lenguages />
      <Education />
    </main>
  );
};

export default AboutMe;
