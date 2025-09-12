import Image from "next/image";

const Projects = () => {
  return (
    <>
      <div className="background"></div>
      <section className="projects bd-grid">
        <div className="main-title">
          <h1>Proyectos</h1>
        </div>
        <ul className="projects_list">
        <li className="links">
            <a
              target="_blank"
              href="https://ligachivilcoyana.com.ar/ligas"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <Image src="/images/liga.png" alt="todo" width={400} height={300}/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Liga Chivilcoyana</h2>
                  </div>
                  <div className="projects_data-leng">
                    <Image src="/images/reactchiquito.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/node.png" width={50} height={50} alt="html"/>
                  </div>
                  <div className="projects_data-desc">
                    Aplicación web para la gestión de la liga chivilcoyana de voley. Desarrollada junto al equipo de Resolve Dev.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="links">
            <a
              target="_blank"
              href="https://resolvedev.com"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <Image src="/images/resdev.png" alt="todo" width={400} height={300}/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Resolve Dev</h2>
                  </div>
                  <div className="projects_data-leng">
                    <Image src="/images/javascript.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/html.png" width={50} height={50} alt="html"/>
                    <Image src="/images/css.png" width={50} height={50} alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Sitio web de mi equipo de desarrolladores donde ofrecemos servicios
                    de desarrollo web, creación de tiendas online y desarrollo a medida.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="links">
            <a
              target="_blank"
              href="https://quedeporte.com.ar"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <Image src="/images/qdp.png" alt="todo" width={400} height={300}/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>QueDeporte</h2>
                  </div>
                  <div className="projects_data-leng">
                    <Image src="/images/angular.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/ts.webp" width={50} height={50} alt="javascript"/>
                    <Image src="/images/node.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/mongodbicon.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/html.png" width={50} height={50} alt="html"/>
                    <Image src="/images/css.png" width={50} height={50} alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Buscador de centros deportivos y profesionales del deporte.
                    Participo en el desarrollo actualmente junto a otros desarrolladores.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="links">
            <a
              target="_blank"
              href="https://digitalredlimit.com"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <Image src="/images/redlimit.jpg" alt="todo" width={400} height={300}/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Digital Red Limit</h2>
                  </div>
                  <div className="projects_data-leng">
                    <Image src="/images/PHP.png" width={50} height={50} alt="php"/>
                    <Image src="/images/javascript.png" width={50} height={50} alt="javascript"/>
                    <Image src="/images/html.png" width={50} height={50} alt="html"/>
                    <Image src="/images/css.png" width={50} height={50} alt="css"/>
                  </div>
                  <div className="projects_data-desc">
                    Sitio web para agencia de marketing, desarrollada por Resolve Dev.
                  </div>
                  <div className="projects_data-responsive">
                    <p>Responsive</p>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="links">
            <a
                target="_blank"
                href="https://findflix.vercel.app/"
                rel="noreferrer"
              >
                <div className="projects_data">
                  <div className="projects_data-images">
                    <Image src="/images/findflix.png" alt="findflix" width={400} height={300}/>
                  </div>
                  <div className="projects_data-info">
                    <article>
                      <div className="projects_data-title">
                        <h2>FindFlix</h2>
                      </div>
                      <div className="projects_data-leng">
                        <Image src="/images/reactchiquito.png" width={50} height={50} alt="react"/>
                        <Image src="/images/tmdb.png" width={50} height={50} alt="tmdb"/>
                      </div>
                      <div className="projects_data-desc">
                        App divertida para encontrar información, servicios de streaming
                        y muchas cosas más de tus películas favoritas.
                      </div>
                      <div className="projects_data-responsive">
                        <p>Responsive</p>
                      </div>
                    </article>
                  </div>
                </div>
            </a>
          </li>

          <li className="links">
            <a
              href="https://animadle.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="projects_data">
                <div className="projects_data-images">
                  <Image src="/images/animadle.png" alt="animadle" width={400} height={300}/>
                </div>
                <div className="projects_data-info">
                  <div className="projects_data-title">
                    <h2>Animadle</h2>
                  </div>
                  <div className="projects_data-leng">
                    <Image src="/images/mui.png" width={50} height={50} alt="mui"/>
                  </div>
                  <div className="projects_data-desc">
                    Juego al estilo wordle, donde deberás adivinar el animal de 5
                    letras.
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Projects;
