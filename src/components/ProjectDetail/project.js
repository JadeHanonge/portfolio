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
            <h2>{projects.name}</h2>
        </div>
    )
}

export default Project;