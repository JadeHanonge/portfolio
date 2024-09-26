import * as React from "react";
import NavBarre from "../components/navBarre";
import Cards from "../components/cards";


const Projects = () => {
    return (
        <div style ={{backgroundColor: '#bfd4b5', minHeight: '100vh'}}>
          <NavBarre pageTitle={"Project"} />
          <Cards/>
        </div>
      );
};

export default Projects;