const path = require('path');
const axios = require('axios');

// Cette fonction est appelée lors de la construction du site
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  try {
    // Remplace `apiurl` par l'URL de ton API
    const response = await axios.get('https://portfolio-api-svsy.onrender.com/api/projects');
    const projects = response.data.rows; // Récupérer les projets depuis la réponse
    // Créer une page pour chaque projet
    projects.forEach(project => {
      createPage({
        path: `/projectDetail/${project.id}`, // Chemin de la route dynamique
        component: path.resolve(`src/pages/projectDetail.js`), // Chemin vers le modèle
        context: {
          id: project.id, // Passez l'ID en tant que contexte
        },
      });
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
  }
};
