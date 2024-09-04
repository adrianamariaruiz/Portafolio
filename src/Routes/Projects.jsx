import React from "react";
import { Navbar } from "../components/Navbar";
import { projects } from "../helpers/projects";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
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
                  {projects.map((card) => (
                    <ProjectsCard
                      key={card.id}
                      title={card.title}
                      url={card.url}
                      cardImage={card.cardImage}
                      urlRepo={card.urlRepo}
                      altImage={card.altImage}
                      languages={card.languages}
                    />
                  ))}
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
