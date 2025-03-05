import React from 'react';
import projects from '../../Data/Projects';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className="project-class">
        <div className="project-details">
          <h1>Projects</h1>
          <div className="project">
            {projects.map((project, index) => (
              <div className="project-content" key={index}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>Technology used</p>
                <ul>
                  {project.technology.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>

                {project.link ? <a href={project.link}>Project-Link</a> : ''}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Projects