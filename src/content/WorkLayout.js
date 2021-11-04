import React from 'react';

const WorkLayout = ({ name, github, preview, description }) => {
  const img = require(`../img/projects/${name}.jpg`);
  return (
    <div className="item">
      <div className="item__image">
        <img src={img.default} alt="project" />
        <div className="item__info">
          <div className="item__info-heading">{name}</div>
          <div className="item__info-subheading">{description}</div>
        </div>
      </div>
      <a href={preview} className="btn-light" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-eye" /> Preview
      </a>
      <a href={github} className="btn-dark" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github" /> Github
      </a>
    </div>
  );
};

export default WorkLayout;
