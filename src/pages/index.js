import * as React from "react";
import NavBarre from "../components/navBarre";
import '/home/jade/dev/portfolio/src/pages/homePage.css';


const Homepage = () => {
  return (
    <main className="home-page">
      <NavBarre pageTitle={"Home"} />
    </main>
  );
}

export default Homepage;