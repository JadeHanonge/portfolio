import * as React from "react";
import NavBarre from "../components/navBarre";
import DataCup from "../components/Experience/Datacup";






const Experience1 = () => {
  return (
    <main style ={{backgroundColor: '#bfd4b5', minHeight: '200vh'}}>
      <NavBarre pageTitle={"Home"} />
      <DataCup/>
    </main>
  );
}

export default Experience1;