import '../styles/myway.css';

const MyWay = () => {

    return (
        <section className='myway'>
            <header>
                <strong>¡Mi camino!</strong>
            </header>
            <div>
                <ul className="timeline-container">
                    <li className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Febrero - 2020</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>¡Comienzo mis estudios!</strong>
                                <span>Universidad Tecnologica Nacional</span>
                            </header>
                            <article>
                                <p>Estudiante de la Tecnicatura Universitaria en Programación.</p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Enero - 2022</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Curso</strong>
                                <span>Udemy</span>
                            </header>
                            <article>
                                <p>React - Guía definitiva: hooks router redux next +Proyectos</p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Mayo - 2023 / Mayo - 2024</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Desarrollador Fullstack</strong>
                                <span>Craving - Consultora de Software</span>
                            </header>
                            <article>
                                <p>Desarrollo frontend y backend de
                                    aplicaciones web como e-commerce,
                                    sistemas de gestión, sistemas de
                                    mantenimiento, etc. Utilizando las
                                    tecnologías: Javascript, HTML, CSS.
                                    Manejo de bases de datos NoSQL
                                    (RethinkDB).
                                </p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Mayo - 2023</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Terminó mis estudios</strong>
                                <span>Universidad Tecnologica Nacional</span>
                            </header>
                            <article>
                                <p>Recibido como Tecnico Universitario en Programación</p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Marzo - 2024</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Diplomatura Universitaria en Desarrollo Backend</strong>
                                <span>Universidad Nacional de Tres de Febrero</span>
                            </header>
                            <article>
                                <p>
                                    Estudiante de la Diplomatura Universitaria en Desarrollo Backend.
                                </p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-left">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Abril - 2024</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Desarrollador Fullstack Freelance</strong>
                                <span>Freelance - Resolve Dev Desarrollo web & Soluciones Tecnologicas</span>
                            </header>
                            <article>
                                <p>
                                    Co-fundador de Resolve Dev, desarrollo de paginas web y soluciones tecnologicas
                                </p>
                            </article>
                        </section>
                    </li>
                    <li className="timeline-block timeline-block-right">
                        <div className="marker"></div>
                        <section className="timeline-content">
                            <header>
                                <em>Abril - 2025</em>
                                <strong style={{ color: "rgb(56 189 248)" }}>Packaged App Development Associate</strong>
                                <span>ACCENTURE</span>
                            </header>
                            <article>
                                <p></p>
                            </article>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
    )
} 

export default MyWay