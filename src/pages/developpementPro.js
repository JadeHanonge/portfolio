import * as React from "react";
//import React, { useEffect, useState } from 'react';
import NavBarre from "../components/navBarre";
import VeilleTechno from "../components/VeilleTechno/veilleTechno";
import Pro from "../components/VeilleTechno/Pro";

const DeveloppemntPro = () => {
    return (
        <div style ={{backgroundColor: '#bfd4b5', minHeight: '100vh'}}>
          <NavBarre pageTitle={"Developpement profesionnel"} />
          <VeilleTechno/>
          <Pro/>
        </div>
      );
}

export default DeveloppemntPro;