import React from 'react'
import { Link } from 'react-router-dom'


export const Body = () => {
    return (
        <div className='contenedor-body'>

            <div className='cont-educa'>
                <h1>FRONTEND WEB DEVELOPER</h1>
                <br />
                <h2>Educación</h2>
                <h4>Medica Veterinaria</h4>
                <p>Universidad de La Salle</p>
                <span>Caldas(Antioquia)-Colombia</span>
                <hr />

                <h4>Inlges</h4>
                <p>Curso en Colombo Americano</p>
                <span>Medellin-Colombia</span>
                <hr />

                <h4>UDEMY</h4>
                <ul>
                    <li>Programacion para principiantes - Primeros pasos (Fernando Herrera)</li>
                    <li>Visual Studio Code: Mejora tu velocidad para codificar (Fernando Herrera)</li>
                    <li>React: De cero a experto / hooks y MERN (Fernando Herrera)</li>
                </ul>
                <hr />

                <h4>Proyectos</h4>
                <nav>
                    <ul>
                        <li>
                            <Link to='https://adrianamariaruiz.github.io/grapeApp/'>grapeApp</Link>
                        </li>
                        <li>
                            <Link to='https://adrianamariaruiz.github.io/app-dogs/'>app-dog</Link>
                        </li>
                        <li>
                            <Link to='https://adrianamariaruiz.github.io/smoothie-app/'>smoothie-app</Link>
                        </li>
                        <li>
                            <Link to='https://adrianamariaruiz.github.io/react-gifexpertapp/'>react-gifexpertapp</Link>
                        </li>
                        <li>
                            <Link to='https://adrianamariaruiz.github.io/App_API_paises/'>App_API_paises</Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}
