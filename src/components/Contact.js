import Github from "../images/gh.png";
import IG from "../images/instagram.png";
import Linkedin from "../images/linkedin.png";
import Gmail from "../images/gmail.png";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const gmailAlert = () => {
    alert("Mi email: bjuan.ignacio11@gmail.com");
  };

  return (
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
            <div onClick={gmailAlert} className="contact-data-images">
              <img src={Gmail} loading="lazy" alt="logo ge" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
