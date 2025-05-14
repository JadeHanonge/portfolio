import * as React from "react";
import './Pro.css';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";



const Pro= () => {
    const stages = [
        {
            id : "1",
            entreprise : "DataCup",
            post : "Développeuse Web",
            duree : "8 semaines",
            description : "Mise en place d'une API text-to-speech pour lire le contenue d'une page web.",
            image : "/images/Datacup.png"
        },
        {
            id: "2",
            entreprise : "Numéricli",
            post : "Service civique",
            duree: "9 mois",
            description: "Conception et animation de cours sur le développement web et introduction à Python.",
            image: "/images/Numericli.png"
        }
    ]



  return (
    <div className="stages-container">
        <h2 className="titre">Expérience profesionnel</h2>
        <div className="stages-grid">
            {stages.map(stage => (
                <Link to={`/Experience${stage.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="stages-card">
                        <img className="stages-image" src={stage.image} alt={stage.entreprise}  width={400} height={300}/>
                        <h5>{stage.entreprise}</h5>
                        <div className="infos">
                            <p className="post">{stage.post}</p>
                            <p className="duree">{stage.duree}</p>
                        </div>
                        <p className="description">{stage.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  );
};

export default Pro;