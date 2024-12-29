import React from "react";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import MyNavbar from "../Component/myNavbar/MyNavbar";
// import Skills2 from "./Skills";

function Combined() {
  return (
    <div>
      <Home id="home" />
      {/* <Skills2 id="skills" /> */}
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
      <MyNavbar className="myNavbar" />
    </div>
  );
}

export default Combined;
