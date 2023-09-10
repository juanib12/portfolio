import Education from "./Education";
import Header from "./Header";
import Lenguages from "./Lenguages";

const AboutMe = () => {
  return (
    <main className="bd-grid">
      <section className="about" id="about">
        <div className="about-title">
          <h2>Sobre mí y tecnologías que aprendí</h2>
        </div>
        <div className="about_data_title">
          <h2>¿Quién soy?</h2>
          <span>
            Mi nombre es <em>Juan</em>, tengo 21 años, estudi&eacute; y me recib&iacute; como <em>t&eacute;cnico universitario
            en programaci&oacute;n</em>, en la Universidad Tecnol&oacute;gica Nacional.
            Adem&aacute;s estoy formandome de manera autodidacta, sobre todo lo relacionado al desarrollo
            web tanto <em>frontend</em> como <em>backend</em> y he realizado varios cursos sobre ReactJS y NodeJS
            en la plataforma Udemy.<br/><br/>

            Adem&aacute;s de estudiar e informarme sobre el <em>mundo IT</em>, me gusta escuchar m&uacute;sica mientras
            disfruto de un rico <em>caf&eacute; ☕</em>.
          </span>
        </div>
      </section>
      <Lenguages />
      <Education />
    </main>
  );
};

export default AboutMe;
