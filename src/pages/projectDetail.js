import * as React from 'react';
import NavBarre from "../components/navBarre";
import Project from '../components/ProjectDetail/project';

const ProjectDetail = ({ pageContext }) => {
    const {id} = pageContext;

    


    return (

        <div style ={{backgroundColor: '#bfd4b5', minHeight: '100vh'}}>
            <NavBarre pageTitle={"Project"} />
            <Project id={id}/>
        </div>
        
    );
}

export default ProjectDetail;