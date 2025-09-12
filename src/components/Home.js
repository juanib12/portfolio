import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <section className="bd-grid">
        <div className="home">
          <div style={{width: '15em'}}>
            <Image src="/images/juani2.jpg" alt="profile" className="avatar" width={240} height={240}/>
          </div>
          <div className="home_title">
            <h2>Hola! Soy</h2>
            <h1>Juan Bianco</h1>
            <h3>Full Stack Developer 💻</h3>
          </div>
          <div className="home_actions">
            <a href="#sobremi" className="home_actions-about">
              Sobre mí
            </a>
            <Link
              href="/cv"
              className="home_actions-cv"
            >
              Descargar CV
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
