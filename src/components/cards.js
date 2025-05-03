//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import './cards.css';
import { getProjects } from './projects.service';
import { Link } from 'gatsby';

//import { StaticImage } from 'gatsby-plugin-image';
//import axios from 'axios';

const Cards = () => {
    const [projects, setProjects] = useState([]);

    // Utilisation du service pour récupérer les projets depuis l'API
    useEffect(() => {
      getProjects()
        .then(data => {
          console.log("donée recup : ", data);
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
            <Link key={project.id} to={`/projectDetail/${project.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="project-card">
                <img src={project.image} alt={project.nom} className="project-image" width={400} height={300} />
                <h2>{project.nom}</h2>
                <p>{project.description}</p>
                <a href={project.lien} target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Cards;