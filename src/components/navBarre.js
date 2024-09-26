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
            <Link to="/about" className="navbar-link">
                About
            </Link>
            </li>
            <li className="navbar-item">
            <Link to="/projects" className="navbar-link">
                Projects
            </Link>
            </li>
        </ul>
        </nav>
    </>
  );
};

export default NavBarre;
