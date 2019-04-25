import React from "react";

const WorkLayout = props => {
  const img = require("../img/projects/" + props.src + ".jpg");
  return (
    <div className="item">
      <img src={img} alt="project" />
      <a
        href={"https://github.com/shivs077/" + props.src}
        className="btn-light"
      >
        <i className="fas fa-eye" /> Project
      </a>
      <a href={"https://github.com/shivs077/" + props.src} className="btn-dark">
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
};

export default WorkLayout;
