import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons";


import myphoto from "../imagen/myphoto.png";

export const Sidebar = () => {
  
  return (
    <div className="container__sidebar">
      <div className="container__img">
        <img src={myphoto} alt="myphoto" className="myphoto" />
      </div>

      <div className="container__info">
        <h2>Adriana M. Ruiz Henao</h2>
        <span>Desarrolladora Frontend</span>
        <hr />

        <p className="container__info--p">Sobre mi</p>
        <p className="container__info--text about__me">
          Soy desarrolladora frontend egresada del bootcamp de Laboratoria, tengo experiencia realizando proyectos con React, y gracias a Laboratoria y a las experiencias laborales, he aprendido a trabajar en equipo, tener una comunicación asertiva y a ser una personsa perseverante, autodidacta y constante. Me gusta estar actualizada y puedo adaptarme facilmente a lo que requiera la empresa. 
          Me encanta realizar el proceso de maquetación de páginas web responsivas con la interacción entre el cliente y la web.
        </p>
        <hr />

        <p className="container__info--p"> Celular </p>
        <div className="container__icon-text">
          <FontAwesomeIcon icon={faMobileScreen} className="icons"/>
          <p className="container__info--text"> (+57) 320 368 2218 </p>
        </div>

        <hr />

        <div className="container__icon-text">
          <FontAwesomeIcon icon={faLinkedin} className="icons iconLinkedIn"/>
          <p className="container__info--p">
            <a href="https://www.linkedin.com/in/adriana-maria-ruiz/">LinkedIn</a>
          </p>
        </div>
        <hr />

        <div className="container__icon-text">
          <FontAwesomeIcon icon={faSquareGithub} className="icons iconLinkedIn"/>
          <p className="container__info--p">
            <a href="https://github.com/adrianamariaruiz">GitHub</a>
          </p>
        </div>
        <hr />

        <div>
          <p className="container__info--p"> Correo de contacto</p>
          <p className="container__info--text">adriannaruiz24@gmail.com</p>
        </div>
        <hr />

        <p className="container__info--text">Antioquia - Colombia</p>
        <hr />

        <div className="container__knowledge">
          <p className="container__info--p">Conocimientos</p>
          <div className="container__knowledge--list">
            <p>HTML</p>
            <p>Javascript</p>
            <p>CSS</p>
            <p>Tailwind</p>
            <p>TypeScript</p>
            <p>React.js</p>
            <p>Node.js</p>
            <p>Firebase</p>
            <p>MySQL</p>
            <p>GraphQL</p>
            <p>VTEX IO</p>
            <p>GitHub</p>
            <p>SCRUM</p>
          </div>
          <hr />

        </div>
        <div className="englishDiv">
          <p className="container__info--p">Inglés</p>
          <div className="container__info--cont">
            <FontAwesomeIcon icon={faLanguage} className="iconEnglish" />
            <a
              href="https://www.efset.org/cert/s7Wn6u"
              target="_blank"
              rel="noreferrer"
              className="container__info--text"
            >
              Nivel: B2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


