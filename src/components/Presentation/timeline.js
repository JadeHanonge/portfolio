import React from "react";
import "./timeline.css"; // à créer

const Timeline = () => {
  const steps = [
    {
      year:"2022",
      title:"BTS MCO - 2e année",
      description:"Création de ma première page web sur wix pendant mos stage.",
    },
    {
      year: "2023",
      title: "BTS SIO – 1re année (SLAM)",
      description: "Découverte du développement web, stage en tant que développer web, découverte de Angular et express.",
    },
    {
      year: "2024",
      title: "BTS SIO – 2e année (SLAM)",
      description: "Projets full-stack, gestion de base de données, et API.",
    },
    {
      year: "2025",
      title: "Objectif : poursuite d'études",
      description: "Intégrer une licence dans le domaine du développement logiciel.",
    },
  ];

  return (
    <div className="timeline">
      {steps.map((step, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{step.year} – {step.title}</h3>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
