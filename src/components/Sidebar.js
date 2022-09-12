import React from 'react'

import foto from '../imagen/foto.jpg';

export const Sidebar = () => {
    return (
        <div className='contenedor-sidebar'>
            <div className='cont-img'>
                <img
                    src={foto}
                    alt='Foto'
                    className='mifoto'
                />
            </div>
            <div className='cont-info'>
                <h2>
                    Adriana M. Ruiz Henao
                </h2>
                <hr />

                <p>Sobre mi</p>
                <span>
                    Soy una persona comprometida, responsable y con sentido de pertenencia. Soy autodidacta y recursiva, por lo que busco, leo y me apoyo en amigos que tengan el conocimiento del tema.
                    Manejo una comunicación asertiva por lo que suelo llevarme bien con los compañeros de trabajo.</span>
                <hr />

                <p> (+57)-300 391 6258  </p>
                <span> celular </span>

                <hr />

                <div>
                    <p>adriannaruiz24@gmail.com</p>
                    <span> correo personal </span>
                </div>
                <hr />

                <p>Antioquia - Colombia</p>
                <hr />

                <div className='cont-conocimientos'>
                    <p className='p-conoc'>
                        Conocimientos
                    </p>
                    <ul className='lista'>
                        HTML
                        <br />
                        CSS
                        <br />
                        Javascript
                        <br />
                        React
                    </ul>
                </div>
            </div>
        </div>
    )
}
