import React from "react";

const WorkLayout = props => {
  const img = require("../img/projects/" + props.src + ".jpg");
  return (
    <div className="item">
      <img src={img} alt="project" />
      {props.src === "BurgerBuilder" ? (
        <a
          href={"https://shivs077.github.io/" + props.src}
          className="btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-eye" /> Project
        </a>
      ) : (
        <a
          href={"https://github.com/shivs077/" + props.src}
          className="btn-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-eye" /> Project
        </a>
      )}
      <a href={"https://github.com/shivs077/" + props.src} className="btn-dark" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
};

export default WorkLayout;
