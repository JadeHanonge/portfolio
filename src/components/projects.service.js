// projectsService.js
import axios from 'axios';

// Fonction pour récupérer les projets depuis l'API
export const getProjects = () => {
  return axios.get('https://portfolio-api-svsy.onrender.com/api/projects')
    .then(response => {
        console.log(response.data.rows);
        return response.data.rows;
        
    })
    
    .catch(error => {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    });
    
};

export const getProjectById = (id) => {
  return axios.get(`https://portfolio-api-svsy.onrender.com/api/projects`)
    .then(response => {
        const rows = response.data.rows

        const project = rows.find(project => project.id === id);

        if (project){
          console.log("project id :", project);
          return project
          
        }
        else{
          console.log("aucun projet trouvé");
          
          return null; // Renvoie les détails du projet
        }
        
    })
    .catch(error => {
      console.error(`Erreur lors de la récupération du projet avec ID ${id} :`, error);
      throw error;
    });
};

export default {getProjects, getProjectById};