import Image from "next/image";

const Education = () => {
  return (
    <section>
      <div className="education-title">
        <h2>Titulos y certificaciones</h2>
      </div>
      <div className="education-data">
        <div className="education-card">
          <div className="ed-card-title">
            <h3>Educación</h3>
          </div>
          <div className="ed-card-container">
            <Image src="/images/untref.png" alt="untref" width={50} height={50} />
            <div className="ed-card-data">
              <h4>Universidad Nacional de Tres de Febrero</h4>
              <p>Diplomatura Universitaria en Desarrollo Backend</p>
              <p className="ed-card-data-extra">2024 - Actualidad</p>
            </div>
          </div>
          <div className="ed-card-container">
            <Image src="/images/logo-utn.png" alt="utn" width={50} height={50} />
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
            <Image src="/images/udemy.png" alt="udemy" width={50} height={50} />
            <div className="ed-card-data">
              <h4>Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero</h4>
              <p>Udemy</p>
              <p className="ed-card-data-extra">Realizado: Octubre 2023</p>
              <a href="https://www.udemy.com/certificate/UC-17a141b7-3b5d-4ae6-af70-5615f223ffeb/" target="__blank">Mostrar credencial</a>
            </div>
          </div>
          <div className="ed-card-container">
            <Image src="/images/udemy.png" alt="udemy" width={50} height={50} />
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
