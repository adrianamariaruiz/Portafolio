import React from "react";
import { Navbar } from "../components/Navbar";
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
import infoapp from "../imagen/infoapp.png";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  const jsCssReactGql = [
    "Lenguajes Usados",
    "JavaScript",
    "CSS",
    "React",
    "GraphQL",
  ];
  const jsCssReactBts = [
    "Lenguajes Usados",
    "JavaScript",
    "CSS",
    "React",
    "Bootstrap",
  ];

  const jsCssTailwindReact = [
    "Lenguajes Usados",
    "JavaScript",
    "CSS",
    "Tailwind",
    "React",
  ];
  const jsCssTailwindReactFirebase = [
    "Lenguajes Usados",
    "JavaScript",
    "CSS",
    "Tailwind",
    "React",
    "Firebase",
  ];

  const jsvanillaCss = ["Lenguajes Usados", "JavaScript vanilla", "CSS"];

  const jsVanillaCssFirebase = [
    "Lenguajes Usados",
    "JavaScript vanilla",
    "CSS",
    "Firebase",
  ];

  const jsReactCss = ["Lenguajes Usados", "JavaScript", "CSS", "React"];

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container__sidebar--body">
          <section className="container__body">
            <div className="container__academy">
              <h2>Mis proyectos</h2>
              <nav>
                <div className="list__projects">
                  {/* InfoApp */}
                  <ProjectsCard
                    title={"Info App"}
                    url={"https://infoapp-table.netlify.app/"}
                    cardImage={infoapp}
                    urlRepo={"https://github.com/adrianamariaruiz/infoapp"}
                    altImage={"info-app"}
                    languages={jsCssReactBts}
                  />

                  {/* App Rick and Morty */}
                  <ProjectsCard
                    title={"App Rick and Morty"}
                    url={"https://app-rick-and-morty-graphql.netlify.app/"}
                    cardImage={appRickMorty}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/app-rick-and-morty-graphql"
                    }
                    altImage={"app-rick-morty"}
                    languages={jsCssReactGql}
                  />

                  {/* Juego-triqui */}
                  <ProjectsCard
                    title={"Juego-triqui"}
                    url={"https://juega-triqui.netlify.app/"}
                    cardImage={triqui}
                    altImage={"Juego-triqui"}
                    urlRepo={"https://github.com/adrianamariaruiz/juego-triqui"}
                    languages={jsReactCss}
                  />

                  {/* TodoApp */}
                  <ProjectsCard
                    title={"Todo app"}
                    url={"https://todo-app-react-tailwind.netlify.app/"}
                    cardImage={todoApp}
                    altImage={"Todo-app"}
                    urlRepo={"https://github.com/adrianamariaruiz/Todo-app"}
                    languages={jsCssTailwindReact}
                  />

                  {/* LabNotes */}
                  <ProjectsCard
                    title={"Lab notes"}
                    url={"https://lab-notes-156fc.web.app/login"}
                    cardImage={labNotes}
                    altImage={"Lab-notes"}
                    urlRepo={"https://github.com/adrianamariaruiz/lab-notes"}
                    languages={jsCssTailwindReactFirebase}
                  />

                  {/* Movie-api */}
                  <ProjectsCard
                    title={"Movie app"}
                    url={"https://flourishing-truffle-4a186a.netlify.app/"}
                    cardImage={movieApp}
                    altImage={"Movie-api"}
                    urlRepo={"https://github.com/adrianamariaruiz/movie-api"}
                    languages={jsReactCss}
                  />

                  {/* Burguer-queen-api-client */}
                  <ProjectsCard
                    title={"Burger queen"}
                    url={"https://burger-queen-zeta.vercel.app/"}
                    cardImage={burgerQueen}
                    altImage={"Burger-queen"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/BOG005-burger-queen-api-client"
                    }
                    languages={jsReactCss}
                  />

                  {/* data-lover */}
                  <ProjectsCard
                    title={"Data lover"}
                    url={
                      "https://adrianamariaruiz.github.io/BOG005-data-lovers/src/"
                    }
                    cardImage={dataLover}
                    altImage={"data-lover"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/BOG005-data-lovers"
                    }
                    languages={jsvanillaCss}
                  />

                  {/* Social Network */}
                  <ProjectsCard
                    title={"Social network"}
                    url={"https://socialnetwork-13.firebaseapp.com/"}
                    cardImage={socialNetwork}
                    altImage={"socialNetwork"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/BOG005-social-network"
                    }
                    languages={jsVanillaCssFirebase}
                  />

                  {/* Card-validation */}
                  <ProjectsCard
                    title={"Card validation"}
                    url={
                      "https://adrianamariaruiz.github.io/card-validation.github.io/src/"
                    }
                    cardImage={cardValidation}
                    altImage={"card-validation"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/card-validation.github.io"
                    }
                    languages={jsvanillaCss}
                  />

                  {/* App api paises */}
                  <ProjectsCard
                    title={"App API paises"}
                    url={"https://adrianamariaruiz.github.io/App_API_paises/"}
                    cardImage={apiPaises}
                    altImage={"apiPaises"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/App_API_paises"
                    }
                    languages={jsReactCss}
                  />

                  {/* Smothie App */}
                  <ProjectsCard
                    title={"Smoothie app"}
                    url={"https://adrianamariaruiz.github.io/smoothie-app/"}
                    cardImage={smoothieApp}
                    altImage={"smoothieApp"}
                    urlRepo={"https://github.com/adrianamariaruiz/smoothie-app"}
                    languages={jsReactCss}
                  />

                  {/* gifExpertApp */}
                  <ProjectsCard
                    title={"Gif ExpertApp"}
                    url={
                      "https://adrianamariaruiz.github.io/react-gifexpertapp/"
                    }
                    cardImage={gifExpertApp}
                    altImage={"gifExpertApp"}
                    urlRepo={
                      "https://github.com/adrianamariaruiz/react-gifexpertapp"
                    }
                    languages={jsReactCss}
                  />
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
