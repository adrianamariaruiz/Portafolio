import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { projects } from "../helpers/projects";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Next");

  const filterProjects = (language) => {
    const filteredProjects = projects.filter((project) => {
      return project.languages.includes(language);
    });
    return filteredProjects;
  };

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container__sidebar--body">
          <section className="container__body">
            <div className="container__academy">
              <h2>Mis proyectos</h2>

              <div className="list__projects">
                <p>Busca por lenguaje</p>
                <select
                  className="select_options"
                  name="select"
                  id=""
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="JavaScript vanilla">JavaScript vanilla</option>
                  <option value="React">React.js</option>
                  <option value="Next" defaultValue={true}>
                    Next.js
                  </option>
                  <option value="Angular">Angular</option>
                  <option value="Java">Java</option>
                </select>
              </div>

              <nav>
                <div className="list__projects">
                  {filterProjects(selectedLanguage).map((card) => (
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
