import Image from "next/image";

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
                    <Image src="/images/WP.png" alt="logo microsoft" width={150} height={150} />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:bjuan.ignacio11@gmail.com"
                  target="__blank"
                >
                  <div className="contact-data-images">
                    <Image src="/images/gmail.png" alt="logo ge" width={150} height={150} />
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/juanignaciobianco/"
                  target="__blank"
                >
                  <div className="contact-data-images">
                    <Image src="/images/linkedin.png" alt="logo ge" width={150} height={150} />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://github.com/juanib12" target="__blank">
                  <div className="contact-data-images">
                    <Image src="/images/gh.png" alt="logo airbnb" width={150} height={150} />
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
