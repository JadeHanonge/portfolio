//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import './cards.css';
import { getProjects } from './projects.service';
//import { StaticImage } from 'gatsby-plugin-image';
//import axios from 'axios';

const Cards = () => {
    const [projects, setProjects] = useState([]);

    // Utilisation du service pour récupérer les projets depuis l'API
    useEffect(() => {
      getProjects()
        .then(data => {
          setProjects(data);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des projets :", error);
        });
    }, []);

    return (
        <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.name} className="project-image" />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </div>
          ))}
        </div>
      </div> 
    );
};

export default Cards;