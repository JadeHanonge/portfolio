import * as React from "react";
import './presentation.css'
import Timeline from "./timeline";


const Presentation = () => {
  return (
    <>
      <h2 className="titre">Jade Hanonge</h2>
        <div className="corps">
          <p>Je suis actuellement étudiant en deuxième année de BTS SIO, spécialité SLAM (Solutions Logicielles et Applications Métiers).
            J’ai développé un réel intérêt pour le développement web et logiciel, en particulier dans la conception de projets bien structurés,
            pensés pour être à la fois efficaces et maintenables.
          </p>
          <p>Ce que j’aime dans le développement, c’est le mélange entre logique, adaptation et précision.
            J’aborde chaque projet comme un défi à relever, en prenant le temps d’analyser les besoins,
            de comprendre les contraintes et de proposer des solutions cohérentes.
          </p>
          <p>Au cours de ma formation, j’ai travaillé avec des technologies comme HTML, CSS, JavaScript, PHP, Node.js, React et MySQL.
             Je continue d’élargir mes compétences tout en consolidant mes bases, car j’accorde beaucoup d’importance à la qualité et à la lisibilité du code.
          </p>
          <p>
            Je vise à poursuivre mes études dans une licence, afin d’approfondir mes connaissances,
            de découvrir d’autres environnements de travail et de relever de nouveaux défis.
          </p>
        </div>

      <Timeline></Timeline>

    </>
  );
};

export default Presentation;