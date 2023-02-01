import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

import foto from '../imagen/foto.jpg';

export const Sidebar = () => {

    // <FontAwesomeIcon icon="fa-solid fa-language" />
    // <FontAwesomeIcon icon="fa-solid fa-file" />

    return (
        <div className='contenedor-sidebar'>
            <div className='cont-img'>
                <img
                    src={foto}
                    alt='Foto'
                    className='miFoto'
                />
            </div>
            
            <div className='cont-info'>
                <h2>
                    Adriana M. Ruiz Henao
                </h2>
                <hr />

                <p className='p-conoc'>Sobre mi</p>
                <p className='about'>
                    Soy una persona comprometida, responsable y con sentido de pertenencia. Soy autodidacta y recursiva, por lo que busco, leo y me apoyo en amigos que tengan el conocimiento del tema.
                    Manejo una comunicación asertiva por lo que suelo llevarme bien con los compañeros de trabajo.
                </p>
                <hr />

                <p> (+57)-300 391 6258  </p>
                <p className='p-conoc'> celular </p>

                <hr />

                <div>
                    <p>adriannaruiz24@gmail.com</p>
                    <p className='p-conoc'> correo de contacto</p>
                </div>
                <hr />

                <p>Antioquia - Colombia</p>
                <hr />

                <div className='cont-conocimientos'>
                    <p className='p-conoc'>
                        Conocimientos
                    </p>
                    <ul className='lista'>
                        <li> HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Tailwind</li>
                        <li>SCRUM</li>
                    </ul>
                    <hr/>
                </div>
                <div className='englishDiv'>
                    <p className='p-conoc'>Inglés</p>
                    <FontAwesomeIcon icon={faLanguage} className='iconEnglish'/>
                    <a href='https://www.efset.org/cert/s7Wn6u' target='_blank' rel='noreferrer' className='linksProjects'>Nivel: B2</a>
                </div>
            </div>
        </div>
    )
}
