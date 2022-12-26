
import AboutImage from "../images/aboutme.png";

const AboutMe = () => {
  return (
    <section className="about bd-grid" id="about">
      <div className="about_title">
        <h1>Sobre mí 🧍‍♂️</h1>
      </div>
      <div className="about_data">
        <img src={AboutImage} width="300px" />
        <div className="about_data_title">
          <h2>¿Quién soy?</h2>
          <p class="mt-6 text-gray-500">
            Mi nombre es Juan Ignacio Bianco, tengo 20 años y actualmente me
            encuentro en mi ultimo año en la Universidad Tecnológica Nacional,
            la carrera Tecnicatura Universitaria en Programación. Además estoy
            formandome de manera autodidacta, sobre todo lo relacionado al
            desarrollo web tanto frontend como backend y he realizado varios
            cursos sobre React.JS y Node.JS en la plataforma Udemy.
          </p>
          <p class="mt-4 text-gray-500">
            Además de estudiar e informarme sobre el mundo IT, me gusta escuchar
            y crear música mientras disfruto de un café ☕.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
