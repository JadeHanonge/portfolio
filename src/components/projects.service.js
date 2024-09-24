// projectsService.js
import axios from 'axios';

// Fonction pour récupérer les projets depuis l'API
export const getProjects = () => {
  return axios.get('http://localhost:5000/api/projects')
    .then(response => {
        console.log(response.data);
        return response.data;
        
    })
    
    .catch(error => {
      console.error("Erreur lors de la récupération des projets :", error);
      throw error;
    });
    
};

export default getProjects;