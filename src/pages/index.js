import * as React from "react";
import NavBarre from "../components/navBarre";



const Homepage = () => {
  return (
    <main style ={{backgroundColor: '#bfd4b5', minHeight: '100vh'}}>
      <NavBarre pageTitle={"Home"} />
    </main>
  );
}

export default Homepage;