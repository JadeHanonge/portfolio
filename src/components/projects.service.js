// projectsService.js
import axios from 'axios';

const api_url = "http://api-portfolio.jadehanonge.com/api/projects";

// Fonction pour récupérer les projets depuis l'API
export const getProjects = () => {
  return axios.get(api_url)
    .then(response => {
        console.log("reponse.data : ",response.data);
        return response.data;

    })

    .catch(error => {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    });

};

export const getProjectById = (id) => {
  return axios.get(api_url)
    .then(response => {
        const rows = response.data

        const project = rows.find(project => project.id === id);

        if (project){
          return project

        }
        else{

          return null; 
        }

    })
    .catch(error => {
      console.error(`Erreur lors de la récupération du projet avec ID ${id} :`, error);
      throw error;
    });
};

export default {getProjects, getProjectById};