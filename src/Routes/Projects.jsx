import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import gifExpertApp from "../imagen/gifExpertApp.jpg";
import smoothieApp from "../imagen/smoothieApp.jpg";
import apiPaises from "../imagen/apiPaises.jpg";
import cardValidation from "../imagen/cardValidation.jpg";
import dataLover from "../imagen/dataLover.jpg";
import socialNetwork from "../imagen/socialNetwork.jpg";
import burgerQueen from "../imagen/burgerQueen.jpg";
import movieApp from "../imagen/movieApp.jpg";
import labNotes from "../imagen/labNotes.jpg";
import todoApp from "../imagen/todoApp.jpg";
import triqui from "../imagen/triqui.jpg";
import appRickMorty from "../imagen/appRickMorty.png";

const Projects = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container__sidebar--body">
          <Sidebar />

          <section className="container__body">
            <div className="container__academy">
              <h2>Mis proyectos</h2>
              <nav>
                <div className="list__projects">
                  {/* App Rick and Morty */}
                  <div className="list__projects--cards">
                    <h3>App Rick and Morty</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://app-rick-and-morty-graphql.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={appRickMorty}
                          alt="app-rick-morty"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                        <p>GraphQL</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/app-rick-and-morty-graphql"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://app-rick-and-morty-graphql.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Juego-triqui */}
                  <div className="list__projects--cards">
                    <h3>Juego-triqui</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://juega-triqui.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={triqui}
                          alt="Juego-triqui"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/juego-triqui"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://juega-triqui.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* TodoApp */}
                  <div className="list__projects--cards">
                    <h3>Todo-app</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://todo-app-react-tailwind.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={todoApp}
                          alt="Todo-app"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>Tailwind</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/Todo-app"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://todo-app-react-tailwind.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* LabNotes */}
                  <div className="list__projects--cards">
                    <h3>Lab-notes</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://lab-notes-156fc.web.app/login"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={labNotes}
                          alt="Lab-notes"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>Tailwind</p>
                        <p>React</p>
                        <p>Firebase</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/lab-notes"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://lab-notes-156fc.web.app/login"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Movie-api */}
                  <div className="list__projects--cards">
                    <h3>Movie-api</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://flourishing-truffle-4a186a.netlify.app/home"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={movieApp}
                          alt="Movie-api"
                          className="imagesProjects"
                          height="200"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/movie-api"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://flourishing-truffle-4a186a.netlify.app/home"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Burguer-queen-api-client */}
                  <div className="list__projects--cards">
                    <h3>Burger-queen-api-client</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://github.com/adrianamariaruiz/BOG005-burger-queen-api-client"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={burgerQueen}
                          alt="Burger-queen-api-client"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/BOG005-burger-queen-api-client"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://burger-queen-zeta.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* data-lover */}
                  <div className="list__projects--cards">
                    <h3>data-lover</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://adrianamariaruiz.github.io/BOG005-data-lovers/src/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={dataLover}
                          alt="data-lover"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript Vanilla</p>
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/BOG005-data-lovers"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://adrianamariaruiz.github.io/BOG005-data-lovers/src/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Social Network */}
                  <div className="list__projects--cards">
                    <h3>social-network</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://socialnetwork-13.firebaseapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={socialNetwork}
                          alt="social-network"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript Vanilla</p>
                        <p>CSS</p>
                        <p>Firebase</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/BOG005-social-network"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://socialnetwork-13.firebaseapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Card-validation */}
                  <div className="list__projects--cards">
                    <h3>card-validation</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://adrianamariaruiz.github.io/card-validation.github.io/src/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={cardValidation}
                          alt="card-validation"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript Vanilla</p>
                        <p>CSS</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/card-validation.github.io"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://adrianamariaruiz.github.io/card-validation.github.io/src/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* App api paises */}
                  <div className="list__projects--cards">
                    <h3>App_API_paises</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://adrianamariaruiz.github.io/App_API_paises/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={apiPaises}
                          alt="App_API_paises"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/App_API_paises"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://adrianamariaruiz.github.io/App_API_paises/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* Smothie App */}
                  <div className="list__projects--cards">
                    <h3>Smoothie-app</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://adrianamariaruiz.github.io/smoothie-app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={smoothieApp}
                          alt="Smoothie-app"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/smoothie-app"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://adrianamariaruiz.github.io/smoothie-app/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>

                  {/* gifExpertApp */}
                  <div className="list__projects--cards">
                    <h3>gifExpertApp</h3>
                    <div className="container__imagesProjects">
                      <a
                        href="https://adrianamariaruiz.github.io/react-gifexpertapp/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src={gifExpertApp}
                          alt="gifExpertApp"
                          className="imagesProjects"
                        />
                      </a>
                      <div className="list__projects--languages">
                        <p>Lenguajes Usados</p>
                        <p>JavaScript</p>
                        <p>CSS</p>
                        <p>React</p>
                      </div>
                    </div>
                    <div className="container__repo--links">
                      <a
                        href="https://github.com/adrianamariaruiz/react-gifexpertapp"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://adrianamariaruiz.github.io/react-gifexpertapp/"
                        target="_blank"
                        rel="noreferrer"
                        className="repo__links"
                      >
                        Web
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
