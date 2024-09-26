// projectsService.js
import axios from 'axios';

// Fonction pour récupérer les projets depuis l'API
export const getProjects = () => {
  return axios.get('https://portfolio-api-svsy.onrender.com/api/projects')
    .then(response => {
        console.log(response.data);
        return response.data.rows;
        
    })
    
    .catch(error => {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    });
    
};

export default getProjects;