import * as React from "react";
//import NavBarre from "../components/navBarre";
import { StaticImage } from "gatsby-plugin-image";


const Images = () => {
    return (
      <div>
        <StaticImage src="../../static/images/projet1.jpg" width={400} height={300}/>
        <StaticImage src="../../static/images/projet2.jpg" width={400} height={300}/>
        <StaticImage src="../../static/images/projet3.jpeg" width={400} height={300}/>
      </div>
      );
};

export default Images;