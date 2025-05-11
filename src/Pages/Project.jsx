// src/Pages/Projects.jsx
import React from "react";
import projectData from "../Projectdata/projectData";
import "./Project.css";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-heading">My Work</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div
              className="project-overlay"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="visit-btn">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
