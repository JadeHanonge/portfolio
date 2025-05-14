import React, { useState, useEffect } from 'react';
import { getProjectById } from '../projects.service';

const Project = ({id}) => {
    const [projects, setProjects] = useState([]);

    // Utilisation du service pour récupérer les projets depuis l'API
    useEffect(() => {
      getProjectById(id)
        .then(data => {
          setProjects(data);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des projets :", error);
        });
    }, [id]);

    return (
        <div>
            <h2>{projects.nom}</h2>
            <h4 className="sous-titre">Presentation du projet</h4>
            <div className="corps">
              <h5 className="partie">{projects.nom}</h5>
              <p>{projects.description}</p>
              <p>{projects.description_longue}</p>
              <h5 className="partie">Stack technique</h5>
              <p>{projects.packTechnique}</p>
              <a href={projects.lien} target='_blank' rel='noopener noreferrer'>Code</a>
             {projects.lien_pdf && (
                <>
                  <h5 className="partie">Documentation</h5>
                  <a href={projects.lien_pdf} target='_blank' rel='noopener noreferrer'>Documentation PDF</a>
                </>
              )}
              {projects.lien_web && (
                <>
                  <h5 className="partie">Lien web</h5>
                  <a href={projects.lien_web} target='_blank' rel='noopener noreferrer'>Site web</a>
                </>
              )}
            </div>
        </div>
    )
}

export default Project;