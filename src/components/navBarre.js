import * as React from 'react';
import { Link } from 'gatsby';
import './navBarre.css'; // Pour le style de la barre de navigation

const NavBarre = ({pageTitle}) => {
    return (
    <>
        <title>{pageTitle}</title>
        <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item">
            <Link to="/" className="navbar-link">
                Home
            </Link>
            </li>
            <li className="navbar-item">
            <Link to="/projects" className="navbar-link">
                Projects
            </Link>
            </li>
            <li className="navbar-item">
            <Link to="/tableauDeSynthese" className="navbar-link">
                Tableau de synthèse
            </Link>
            </li>
            <li className="navbar-item">
            <Link to="/developpementPro" className="navbar-link">
                Développement profesionnel
            </Link>
            </li>
        </ul>
        </nav>
    </>
  );
};

export default NavBarre;
