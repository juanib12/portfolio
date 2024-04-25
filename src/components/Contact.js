import Github from "../images/gh.png";
import IG from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Gmail from "../images/gmail.png";

const Contact = () => {

  return (
      <>
        <div className="background"></div>
        <section className="bd-grid">
          <div className="contact">
            <div className="contact-data_list">
              <a href="https://github.com/juanib12" target="__blank">
                <div className="contact-data-images">
                  <img src={Github} loading="lazy" alt="logo airbnb" />
                </div>
              </a>
              <a href="https://www.instagram.com/bianco_juani/" target="__blank">
                <div className="contact-data-images">
                  <img src={IG} loading="lazy" alt="logo microsoft" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/juanignaciobianco/"
                target="__blank"
              >
                <div className="contact-data-images">
                  <img src={Linkedin} loading="lazy" alt="logo ge" />
                </div>
              </a>
              <a
                href="mailto:bjuan.ignacio11@gmail.com"
                target="__blank"
              >
                <div className="contact-data-images">
                  <img src={Gmail} loading="lazy" alt="logo ge" />
                </div>
              </a>
            </div>
          </div>
        </section>
      </>
  );
};

export default Contact;
