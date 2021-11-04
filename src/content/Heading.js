import React from 'react';

const Heading = props => (
  <>
    <h1 className="lg-heading">
      {props.lg} <span className="text-secondary">{props.span}</span>
    </h1>
    <h2 className="sm-heading">{props.sm}</h2>
  </>
);

export default Heading;
