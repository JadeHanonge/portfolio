import * as React from "react";
import './numericli.css'


const Numericli = () => {
  return (
    <>
      <h2 className="titre">Service Civique - Numericli</h2>
      <h4 className="sous-titre">Presentation de l'entreprise</h4>
        <div className="corps">
          <h5 className="partie">D'où vient Numericli ?</h5>
          <p>Numericli est une association d'intéret général de formation et d'accompagnement à la prise en main des outils numériques.</p>
          <p>L'association Numericli travaille quotidiennement pour former tout type de public dans le développement de leurs compétences numériques pour un usage social, ludique ou professionnel.
          </p>
        </div>
      <h4 className="sous-titre">Presentation du stage</h4>
        <div className="corps">
          <h5 className="partie">Objectif général du service civique</h5>
          <p>Ce service civique avait pour objectif principal de valoriser mes compétences en développement web et en pédagogie numérique à travers la création de contenus et l’animation d’ateliers</p>
          <h5 className="partie">Mission principal</h5>
          <ul className="liste">
            <li>Créations de cours sur le developpement web</li>
            <li>Création de cours sur l'IA</li>
            <li>Animation d'atelier numerique</li>
            <li>Animation de cours python pour enfants, découverte de pygame <a href="https://github.com/JadeHanonge/Pygame/tree/main">Code</a></li>
            <li>Animation de cours sur le developpement web</li>
          </ul>
        </div>
      <h4 className="sous-titre">Bilan</h4>
        <div className="corps">
          <p>Ce service civique a été une expérience enrichissante, tant sur le plan technique que relationnel.
            Il m’a permis de consolider mes compétences en développement web et en intelligence artificielle en créant des supports pédagogiques clairs et accessibles.
          </p>
          <p>J’ai également eu l’occasion d’animer des ateliers numériques variés, notamment des cours de Python pour enfants, où j’ai introduit des notions de programmation ludiques à travers la découverte de Pygame.
          </p>
          <p>
           Ces missions m’ont demandé de faire preuve de pédagogie, d’adaptabilité et d’organisation.
          </p>
        </div>

    </>
  );
};

export default Numericli;