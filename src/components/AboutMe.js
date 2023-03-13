import Education from "./Education";
import Header from "./Header";
import Lenguages from "./Lenguages";

const AboutMe = () => {
  return (
    <>
      <section className="about bd-grid" id="about">
        <div className="about-title">
          <h2>Sobre mí y tecnologías que aprendí</h2>
        </div>
        <div className="about_data_title">
          <h2>¿Quién soy?</h2>
          <p>
            Mi nombre es Juan Ignacio Bianco, tengo 20 años y actualmente me
            encuentro en mi ultimo año en la Universidad Tecnológica Nacional,
            la carrera Tecnicatura Universitaria en Programación. Además estoy
            formandome de manera autodidacta, sobre todo lo relacionado al
            desarrollo web tanto frontend como backend y he realizado varios
            cursos sobre React.JS y Node.JS en la plataforma Udemy.
          </p>
          <p>
            Además de estudiar e informarme sobre el mundo IT, me gusta escuchar
            música mientras disfruto de un café ☕.
          </p>
        </div>
      </section>
      <Lenguages />
      <Education />
    </>
  );
};

export default AboutMe;
