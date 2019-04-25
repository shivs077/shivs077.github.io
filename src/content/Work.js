import React from "react";
import WorkLayout from "./WorkLayout";
import Aux from "../hoc/Aux";

const Work = props => {
  const myWork = props.projects.map(pro => <WorkLayout key={pro} src={pro} />);

  return <Aux>{myWork}</Aux>;
};

export default Work;
