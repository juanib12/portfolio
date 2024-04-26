import Github from "../images/gh.png";
import WP from "../images/WP.png";
import Linkedin from "../images/linkedin.png";
import Gmail from "../images/gmail.png";

const Contact = () => {

  return (
      <>
        <div className="background"></div>
        <section className="bd-grid">
          <div className="contact">
            <header className="contact-title">
              <p>
                ¡Gracias por visitar mi página!
                <br />
                <br />
                Si tienes alguna pregunta o necesitas ayuda con un proyecto web, ¡no dudes en ponerte en contacto conmigo! 
                Estoy disponible y listo para colaborar contigo.
                <br />
                Te invito a que te contactes conmigo por cualquiera de estas plataformas!.
              </p>
            </header>
            <ul className="contact-data_list">
              <li>
                <a href={`https://wa.me/5492346520154?text=${encodeURI("¡Hola! ")}`} target="__blank">
                  <div className="contact-data-images">
                    <img src={WP} loading="lazy" alt="logo microsoft" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bjuan.ignacio11@gmail.com"
                  target="__blank"
                >
                  <div className="contact-data-images">
                    <img src={Gmail} loading="lazy" alt="logo ge" />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/juanignaciobianco/"
                  target="__blank"
                >
                  <div className="contact-data-images">
                    <img src={Linkedin} loading="lazy" alt="logo ge" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/juanib12" target="__blank">
                  <div className="contact-data-images">
                    <img src={Github} loading="lazy" alt="logo airbnb" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </>
  );
};

export default Contact;
