// import React from "react";
// import "./css/Projects.scss";

// function Projects() {
//   return (
//     <div id="projects" className="ProjectsTop">
//           Menu Page
//     </div>
//   );
// }

// export default Projects;

import React from "react";
import menuImage from "../assets/images/Yes_FineMenu.png"; // 이미지 경로
import "./css/Projects.scss"

function MenuPage() {
  return (
    <div id="projects">
      <img src={menuImage} alt="Menu" className="responsive-image" />
    </div>
  );
};

export default MenuPage;
