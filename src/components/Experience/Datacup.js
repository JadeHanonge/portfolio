import * as React from "react";
import './datacup.css'


const DataCup = () => {
  return (
    <>
      <h2 className="titre">Stage de Développeur Web - DataCup</h2>
      <h4 className="sous-titre">Presentation de l'entreprise</h4>
        <div className="corps">
          <h5 className="partie">D'où vient DataCup ?</h5>
          <p>Retour en 2016 : près de 250 000 personnes fuient les attaques violentes orchestrées par Boko Haram et sont réfugiées au sein des camps de réfugiés de Diffa et Tillabéri au Niger</p>
          <p>Le Haut Commissariat aux Réfugiés des Nations Unies (UNHCR) recherche alors une solution pour apporter à ces personnes des contenus médiatiques de leur pays d'origine.
            Les contraintes sur place sont les suivantes : absence de connexion internet et de compétences informatiques, réseau électrique instable.
          </p>
          <p>​Depuis plusieurs années déjà, Mind & Go investit dans la Recherche et Développement pour développer des innovations en ce sens.
            Ainsi naît DataCup. Grâce à notre agrément CII, qui témoigne de notre capacité à concrétiser un prototype, l'UNHCR nous fait confiance pour collaborer sur ce projet.
          </p>
          <p>
            Quelques mois plus tard, 2 DataCups sont déployées sur place. Les ressources sur les DataCup sont accessibles par différents moyens, dont les smartphones, les tablettes, les ordinateurs portables, les ordinateurs de bureau, etc... 
            Malgré le faible taux de connexion à Internet, un nombre étonnamment élevé de jeunes possèdent des smartphones et le UNHCR a fourni en plus des ordinateurs portables et des tablettes aux réfugiés.
          </p>
        </div>
      <h4 className="sous-titre">Presentation du stage</h4>
        <div className="corps">
          <h5 className="partie">Objectif général du stage</h5>
          <p>Ce stage de 8 semaines chez Datacup, avait pour objectif de me familiariser avec le développement web en conditions réelles.
          </p>
          <h5 className="partie">Mission principal</h5>
          <ul className="liste">
            <li>Organisation de mon milieu de travail sur Linux, création clefs ssh, installation VsCode, connexion git, Odoo...</li>
            <li>Projet sur Angular pour me familiariser avec Angular <a href="https://github.com/JadeHanonge/ng-pokemon-app">Code</a></li>
            <li>Création d'un loader dans la page d'acceuil à la suite d'un ticket sur Odoo</li>
            <li>Recherche sur L'accecibilité et présentation des résultat</li>
            <li>Projet en node.js avec express pour me familiariser avec <a href="https://github.com/JadeHanonge/app-js-backend">Code</a></li>
            <li>Réorganisation du backend</li>
            <li>Création d'une API text-to-speech capable de lire un site web <a href="https://github.com/JadeHanonge/api-text-to-speech-backend">code backend</a> - <a href="https://github.com/JadeHanonge/angular-text-to-speech-frontend">code frontend</a></li>
          </ul>
        </div>
      <h4 className="sous-titre">Bilan</h4>
        <div className="corps">
          <p>Ce stage de huit semaines chez DataCup m’a permis de découvrir concrètement le métier de développeur web dans un environnement professionnel.
            Intégré à une équipe œuvrant pour un projet à fort impact humanitaire, j’ai pu comprendre l’importance d’adapter la technologie à des contextes contraints, comme l’absence d’accès à internet ou les difficultés d’alimentation électrique, ce qui donne encore plus de sens à mon futur métier.</p>
          <p>Sur le plan technique, ce stage m’a permis d’acquérir et de consolider plusieurs compétences. J’ai tout d’abord pris en main mon environnement de travail sous Linux, mis en place des outils de versioning avec Git, configuré une clé SSH et installé les outils nécessaires au développement comme VSCode et Odoo. J’ai ensuite eu l’occasion de m’initier à Angular à travers un projet concret, me permettant de mieux comprendre le fonctionnement des composants, des services et du routage. 
            En parallèle, j’ai travaillé sur un projet backend en Node.js avec Express, ce qui m’a permis de renforcer ma compréhension du fonctionnement des APIs REST.
          </p>
          <p>Une de mes missions principales a été la création d'une API de text-to-speech permettant de lire le contenu d’un site web.
            Ce projet complet m’a permis de travailler à la fois sur le backend et sur le frontend en Angular, tout en prenant en compte des notions d’accessibilité, sujet sur lequel j’ai également mené une recherche approfondie et présenté les résultats à l’équipe.
          </p>
          <p>
            Enfin, j’ai également pu contribuer à la maintenance du projet principal, notamment par la création d’un loader pour la page d’accueil via un ticket sur Odoo, et en participant à la réorganisation du backend existant.
          </p>
          <p>Ce stage m’a non seulement permis de progresser sur le plan technique, mais aussi de développer des compétences transversales comme l’autonomie, l’organisation et la recherche de solutions. 
            Il m’a conforté dans mon choix de m’orienter vers le développement web, avec une forte appétence pour les projets à impact et les interfaces accessibles à tous.</p>
        </div>

    </>
  );
};

export default DataCup;