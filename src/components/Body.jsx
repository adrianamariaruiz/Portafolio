import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFile } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon="fa-solid fa-file" />


export const Body = () => {
    return (
        <div className='contenedor-body'>

            <div className='cont-educa'>
                <h1>FRONTEND WEB DEVELOPER</h1>

                <h2>Educación</h2>
                <h4>Desarrolladora Frontend</h4>
                <a href='https://drive.google.com/file/d/163Y6-QaAXyNhAtadOmlbqDYZosupTEPb/view' target='_blank' rel='noreferrer' className='linksProjects'>Laboratoria</a>
                <p>2022</p>
                <span>Colombia</span>
                <hr />

                <h4>Medica Veterinaria</h4>
                <p>Universidad de La Salle</p>
                <span>Caldas(Antioquia)-Colombia</span>
                <hr />

                <h4>Inglés</h4>
                <p>Curso en Colombo Americano</p>
                <span>Medellin-Colombia</span>
                <hr />

                <h4>UDEMY</h4>
                <ul>
                    <li>React JS desde cero! Hooks, Redux, context, firebase y más! (Ignacio Bluuweb)</li>
                    <li>React: De cero a experto / hooks y MERN (Fernando Herrera)</li>
                    <li>Boostrap 5 desde cero + HTML, CSS, Flexbox, Sass, GIT, JS (Ignacio Bluuweb)</li>
                    <li>Visual Studio Code: Mejora tu velocidad para codificar (Fernando Herrera)</li>
                    <li>Programacion para principiantes - Primeros pasos (Fernando Herrera)</li>
                </ul>
                <hr />

                <h4>Experiencia laboral</h4>
                <p>Arte-Laser corte y grabado</p>
                <p>Realicé cotizaciones de los trabajos, diseño gráfico y manejo de maquinaria laser</p>
                <p>Trabajé 1.5 años</p>
                <span>Medellin-Colombia</span>
         
            </div>

        </div>
    )
}
