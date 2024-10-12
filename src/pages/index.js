import * as React from "react";
import NavBarre from "../components/navBarre";
import Presentation from "../components/Presentation/presentation";



const Homepage = () => {
  return (
    <main style ={{backgroundColor: '#bfd4b5', minHeight: '100vh'}}>
      <NavBarre pageTitle={"Home"} />
      <Presentation/>
    </main>
  );
}

export default Homepage;