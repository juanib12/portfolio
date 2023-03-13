import utn from '../images/logo-utn.png'
import udemy from '../images/udemy.png'


const Education = () => {
  return (
    <section className="bd-grid">
      <div className="education-title">
        <h2>Estudios y certificaciones</h2>
      </div>
      <div className="education-data">
        <div className="education-card">
          <div className="ed-card-title">
            <h3>Educación</h3>
          </div>
          <div className="ed-card-container">
            <img src={utn} alt="utn" width="50" height="50" />
            <div className="ed-card-data">
              <h4>Universidad Tecnológica Nacional</h4>
              <p>Tecnicatura Universidad en Programación</p>
              <p className="ed-card-data-extra">2020 - 2023</p>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="ed-card-title">
            <h3>Licencias y certificaciones</h3>
          </div>
          <div className="ed-card-container">
            <img src={udemy} alt="udemy" width="50" height="50" />
            <div className="ed-card-data">
              <h4>React - Guía definitiva: hooks router redux next +Proyectos</h4>
              <p>Udemy</p>
              <p className="ed-card-data-extra">Realizado: Enero 2022</p>
              <a href="https://www.udemy.com/certificate/UC-258b6655-6dd1-433e-bf5f-212bea59c86c/" target="__blank">Mostrar credencial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
