import React from 'react';
import projectsData from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => (
  <div>
    <h1>Projects</h1>
    <ul>
      {projectsData.map(project => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} style={{ width: '200px', height: '200px' }} />
          <p>{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
        </li>
      ))}
    </ul>
    <Link to="/">Home</Link>
  </div>
);

export default Projects;
