import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

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
        <p className="container__info--text">
          Soy una persona comprometida, responsable y con sentido de
          pertenencia. Soy autodidacta y recursiva, por lo que busco, leo y me
          apoyo en amigos que tengan el conocimiento del tema. Manejo una
          comunicación asertiva por lo que suelo llevarme bien con los
          compañeros de trabajo.
        </p>
        <hr />

        <p className="container__info--p"> celular </p>
        <p className="container__info--text"> (+57) 300 391 6258 </p>

        <hr />

        <p className="container__info--p">
          <a href="https://www.linkedin.com/in/adriana-maria-ruiz/">LinkedIn</a>
        </p>
        <hr />

        <div>
          <p className="container__info--p"> correo de contacto</p>
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


