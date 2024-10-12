import * as React from "react";
//import NavBarre from "../components/navBarre";
import { StaticImage } from "gatsby-plugin-image";


const Images = () => {
    return (
      <div>
        <StaticImage src="../images/projet1.jpg"/>
        <StaticImage src="../images/projet2.jpg"/>
        <StaticImage src="../images/projet3.jpg"/>
      </div> 
      );
};

export default Images;