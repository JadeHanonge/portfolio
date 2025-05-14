import * as React from "react";
import "./veilleTechno.css";




const VeilleTechno = () => {
  return (
    <>
      <h2 className="titre">Veille téchnologique</h2>
      <div className="Subject">
        <h4 className="sous-titre">L’accessibilité des sites web pour les personnes en situation de handicap</h4>
          <div className="corps">
            <h5 className="partie">Introduction</h5>
            <p>L’accessibilité des sites web est un enjeu fondamental dans le développement numérique moderne.</p>
            <p>Elle vise à garantir que toutes les personnes, y compris celles ayant un handicap visuel, moteur,
              auditif ou cognitif (comme la dyslexie ou le daltonisme), puissent naviguer facilement sur Internet.</p>
            <p>Ce sujet prend une importance croissante avec les réglementations,
              comme la loi RGAA (Référentiel Général d'Amélioration de l'Accessibilité) en France ou les normes WCAG au niveau international.</p>
          </div>
          <div className="corps">
            <h5 className="partie">Pourquoi ai-je choisi ce sujet ?</h5>
            <p>J’ai choisi de m’intéresser à l’accessibilité des sites web car j’ai eu l’occasion de travailler sur ce sujet lors de mon stage</p>
            <p>Ce fut une expérience marquante, car j’ai pris conscience des difficultés que rencontrent de nombreuses personnes pour accéder à des contenus en ligne,
              et du rôle important que les développeurs peuvent jouer pour améliorer leur quotidien.</p>
            <p>En travaillant sur l’accessibilité numérique, j’ai réalisé qu’il ne s’agissait pas seulement d’ajouter quelques ajustements techniques,
              mais d’adopter une véritable démarche inclusive dès la conception d’un site web.</p>
            <p>Cela m’a beaucoup intéressé car cela donne du sens à notre métier : il ne s’agit pas seulement de faire un site “joli” ou fonctionnel, mais aussi juste et utilisable par tous.</p>
          </div>
      </div>
      <h4 className="sous-titre">Méthode de recherche</h4>
      <div className="corps">
        <h5 className="partie">Outils utilisée</h5>
        <ul className="liste">
          <li>Agrégateurs de flux RSS: Feedly, Inoreader, Netvibes</li>
          <li>Alertes automatisées : Google Alerts, Talkwalker Alerts</li>
          <li>Réseaux sociaux professionnels : LinkedIn</li>
          <li>Sites spécialisés et blogs : WebAIM.org, W3C Accessibility, a11yproject.com</li>
        </ul>
        <h5 className="partie">Fréquence de lecture</h5>
        <p>Hebdomadaire</p>
        <ul className="liste">
          <li>Lecture rapide des articles récents</li>
          <li>Mise à jour des tendances ou outils</li>
        </ul>
        <p>Mensuelle</p>
        <ul className="liste">
          <li>Synthèse personnelle ou résumé</li>
          <li>Ajout de ressources</li>
        </ul>
        <p>Trimestrielle</p>
        <ul className="liste">
          <li>Approfondir un sujet</li>
          <li>Évaluer ce qui a évolué</li>
        </ul>
      </div>
      <h4 className="sous-titre">Point important appris</h4>
      <div className="corps">
        <h5 className="partie">L’accessibilité devient une obligation plus stricte</h5>
        <ul className="liste">
          <li>La directive européenne EN 301 549 impose aux services publics d’assurer l’accessibilité numérique.
            Depuis 2025, les entreprises privées fournissant des services essentiels (banques, e-commerce, transport...) doivent aussi s’y conformer via le European Accessibility Act.
          </li>
          <li>En France, le RGAA v4.1.2 est le référentiel officiel pour évaluer la conformité.</li>
        </ul>
        <h5 className="partie">Le rôle des développeurs et designers évolue</h5>
        <ul className="liste">
          <li>Les frameworks modernes comme React, Vue ou Angular intègrent mieux les composants accessibles.</li>
          <li>Les développeurs sont encouragés à documenter l’accessibilité de leurs composants, utiliser des linters, et tester au clavier + lecteur d’écran (NVDA, VoiceOver…).</li>
        </ul>
        <h5 className="partie">Les outils de tests automatiques s'améliorent</h5>
        <ul className="liste">
          <li>Outils comme Lighthouse, axe DevTools, WAVE ou Accessibility Insights permettent de repérer les erreurs de contraste, d’aria-*, de navigation clavier…
          </li>
          <li>Ils facilitent une première analyse mais doivent être complétés par des tests manuels, notamment pour la logique de navigation ou l’ordre de tabulation.</li>
        </ul>
        <h5 className="partie">Les besoins spécifiques sont mieux reconnus</h5>
        <ul className="liste">
          <li>On parle de plus en plus d’accessibilité cognitive, pour les personnes avec dyslexie, TDAH, autisme…
            Cela implique de simplifier le langage, d’éviter les distractions visuelles, et de structurer l’information.
          </li>
          <li>L’usage de polices lisibles, de textes courts et de visuels clairs aide ces publics.</li>
        </ul>
        <h5 className="partie"> L’accessibilité = meilleure UX</h5>
        <ul className="liste">
          <li>Ce qui est bon pour l’accessibilité est souvent bon pour tous : contrastes clairs, navigation clavier, boutons visibles, alternatives textuelles.</li>
          <li>Le design inclusif vise à rendre les interfaces utilisables pour tous dès la conception.</li>
        </ul>
      </div>
      <h4 className="sous-titre">Conclusion</h4>
      <div className="corps">
        <p>Cette veille technologique sur l’accessibilité des sites web m’a permis de prendre conscience de l’importance de rendre le web plus inclusif.
        J’ai découvert que l’accessibilité ne concerne pas seulement les personnes aveugles ou malvoyantes,
        mais aussi celles atteintes de troubles moteurs, cognitifs, auditifs ou de troubles comme la dyslexie ou le daltonisme.</p>
        <p>Grâce à cette veille, j’ai appris à utiliser des outils pour analyser l’accessibilité d’un site, à repérer les bonnes pratiques et à intégrer ces principes dans mes propres projets.
        J’ai compris qu’un site bien conçu pour les personnes en situation de handicap est souvent plus confortable à utiliser pour tous.</p>
        <p>Cette réflexion m’a touché d’autant plus que j’ai eu l’occasion d’aborder ces problématiques concrètement lors de mon stage, ce qui m’a donné envie d’approfondir le sujet.
          Aujourd’hui, je suis convaincu que chaque développeur a un rôle à jouer pour construire un web plus équitable, et je souhaite continuer à m’améliorer sur ces aspects dans mes projets futurs.</p>
      </div>
    </>
  );
};

export default VeilleTechno;