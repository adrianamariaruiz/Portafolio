import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import myphoto from "../imagen/myphoto.png";
import ContactForm from "./ContactForm";

export const Sidebar = () => {
  const knowledge = [
    "React.js",
    "TypeScript",
    "Javascript",
    "Tailwind CSS",
    "Next.js",
    "SvelteKit",
    "VTEX IO",
    "Node.js",
    "Java",
    "Springboot",
    "GraphQL",
    "NoSQL",
    "SQL",
    "PostgreSQL",
    "Git",
    "SCRUM",
  ];

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
          Me encanta realizar el proceso de maquetación de páginas web
          responsivas con la interacción entre el cliente y la web.
        </p>
        <p className="container__info--text about__me">
          Gracias a las experiencias laborales que he tenido he aprendido a
          trabajar en equipo, tener una comunicación asertiva y a ser
          perseverante, autodidacta y constante.
        </p>
        <p className="container__info--text about__me">
          Me gusta estar actualizada y puedo adaptarme fácilmente a lo que se
          requiera en la empresa.
        </p>

        <hr />

        <div className="container__icon-text">
          <FontAwesomeIcon icon={faLinkedin} className="icons iconLinkedIn" />
          <p className="container__info--p">
            <a href="https://www.linkedin.com/in/adriana-maria-ruiz/">
              LinkedIn
            </a>
          </p>
        </div>
        <hr />

        <div className="container__icon-text">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="icons iconLinkedIn"
          />
          <p className="container__info--p">
            <a href="https://github.com/adrianamariaruiz">GitHub</a>
          </p>
        </div>
        <hr />

        <p className="container__info--text">Antioquia - Colombia</p>
        <hr />

        <div className="container__knowledge">
          <p className="container__info--p">Conocimientos</p>
          <div className="container__knowledge--list">
            {knowledge.map((know) => (
              <div key={know}>
                <p>{know}</p>
              </div>
            ))}
          </div>
          <hr />
        </div>
        <div className="englishDiv">
          <p className="container__info--p" id="prueba">
            Inglés
          </p>
          <div className="container__info--cont">
            <FontAwesomeIcon icon={faLanguage} className="iconEnglish" />
            <a
              href="https://www.efset.org/cert/s7Wn6u"
              target="_blank"
              rel="noreferrer"
              className="container__info--text"
            >
              Nivel B2: Listening & Reading
            </a>
            <p className="container__info--text">Nivel B1: Speaking</p>
          </div>
        </div>

        <hr />
        <div className="englishDiv">
          <p className="container__info--p" id="prueba">
            Soft Skills
          </p>
          <div className="container__info--cont">
            <ul className="list__softskills">
              <li>Trabajo en equipo</li>
              <li>Adaptación al cambio</li>
              <li>Resiliencia</li>
              <li>Responsable</li>
              <li>Autodidacta</li>
              <li>Comunicación asertiva</li>
            </ul>
          </div>
        </div>

        <hr />
        <ContactForm />
      </div>
    </div>
  );
};
