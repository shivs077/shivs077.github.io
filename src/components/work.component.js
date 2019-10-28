import React from "react";
import Heading from "../content/Heading";
import Work from "../content/Work";
import Aux from "../hoc/Auy";
import Footer from "./Footer";

const WorkPage = () => {
  document.title = "My Portfolio | Work";
  const projects = [
    "BurgerBuilder",
    "iWeather",
    "VoiceEasy",
    "GoodDrop",
    "HirePredictor"
  ];
  return (
    <Aux>
      <main id="work">
        <Heading lg="My" span="Work" sm="My Few Work Samples..." />
        <div className="projects">
          <Work projects={projects} />
        </div>
      </main>
      <Footer />
    </Aux>
  );
};

export default WorkPage;
