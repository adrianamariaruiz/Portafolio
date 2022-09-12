import React from 'react'
import { NavLink } from 'react-router-dom'


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

                <h4>Ingles</h4>
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
                    <ul className='lista-proyectos'>
                        <li>
                            <NavLink to='/BOG005-data-lovers/src/' className='activa'>data-lover</NavLink>
                        </li>
                        <li>
                            <NavLink to='/card-validation.github.io/src/' className='activa'>card-validation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/grapeApp/' className='activa'>grapeApp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/app-dogs/' className='activa'>app-dog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/smoothie-app/' className='activa'>smoothie-app</NavLink>
                        </li>
                        <li>
                            <NavLink to='/react-gifexpertapp/' className='activa'>react-gifexpertapp</NavLink>
                        </li>
                        <li>
                            <NavLink to='/App_API_paises/' className='activa'>App_API_paises</NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

        </div>
    )
}
