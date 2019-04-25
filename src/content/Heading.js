import React from "react";
import Aux from "../hoc/Aux";

const Heading = props => (
  <Aux>
    <h1 className="lg-heading">
      {props.lg} <span className="text-secondary">{props.span}</span>
    </h1>
    <h2 className="sm-heading">{props.sm}</h2>
  </Aux>
);

export default Heading;
