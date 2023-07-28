import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFile } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon="fa-solid fa-file" />


export const Body = () => {
    return (
        <main className='container__body'>

            <section className='container__academy'>
                <h1>FRONTEND WEB DEVELOPER</h1>

                <h2>Experiencia laboral</h2>

                <div>
                    <h4>IT Globers</h4>
                    <p>Desarrolladora Frontend Trainee</p>
                    <p>Aprendi a usar VTEX IO nativo y a realizar componentes custom usando React y Typescript y hacer su respectiva conexion.</p>
                    <p>01 Abril 2023 - 30 Mayo 2023</p>
                    <span>Colombia</span>
                </div>
                <hr />

                <div>
                    <h4>Arte-Laser corte y grabado</h4>
                    <p>Realicé cotizaciones de los trabajos, diseño gráfico y manejo de maquinaria laser</p>
                    <p>julio 2017 - marzo 2019</p>
                    <span>Medellin-Colombia</span>
                </div>

                <h2>Educación</h2>

                <div>
                    <h4>Desarrolladora Frontend</h4>
                    <a href='https://drive.google.com/file/d/163Y6-QaAXyNhAtadOmlbqDYZosupTEPb/view' target='_blank' rel='noreferrer' className='projects__links'>Laboratoria</a>
                    <br/>
                    <span>Julio 2022 - Diciembre 2022</span>
                    <p>Bootcamp de aprendizaje intensivo donde se desarrolla habilidades técnicas y blandas que capacitan para trabajar en la industria Tech.</p>
                    <span>Colombia</span>
                </div>
                <hr />

                <div>
                    <h4>SQL</h4>
                    <span>Junio 2023</span>
                    <br/>
                    <a href='https://www.credential.net/a187f127-e347-4550-b326-540fefdd5412#gs.1ryl2v' target='_blank' rel='noreferrer' className='projects__links'>Curso dictado por Globant y Laboratoria</a>
                    <p>Los fundamentos de las bases de datos, donde aprendí la creación de tablas y consultas.</p>
                </div>
                <hr />

                <div>
                    <h4>UDEMY</h4>
                    <ul>
                        <li><a href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-8bbd6b96-1e4a-477d-b2ff-00fdaf91a915.pdf' className='projects__links'>React JS desde cero! Hooks, Redux, context, firebase y más! (Ignacio Bluuweb)</a></li>
                        <li>React: De cero a experto / hooks y MERN (Fernando Herrera)</li>
                        <li>Boostrap 5 desde cero + HTML, CSS, Flexbox, Sass, GIT, JS (Ignacio Bluuweb)</li>
                        <li>Visual Studio Code: Mejora tu velocidad para codificar (Fernando Herrera)</li>
                        <li>Programacion para principiantes - Primeros pasos (Fernando Herrera)</li>
                    </ul>
                </div>
                <hr />
                
                <div>
                    <h4>Inglés</h4>
                    <p>Curso en Colombo Americano</p>
                    <span>Medellin-Colombia</span>
                </div>
                <hr />

                <div>
                    <h4>Medica Veterinaria</h4>
                    <p>Universidad de La Salle</p>
                    <span>Caldas(Antioquia)-Colombia</span>
                </div>         

            </section>

        </main>
    )
}
