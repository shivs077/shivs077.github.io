import React from 'react';
import WorkLayout from './WorkLayout';

const Work = props => {
  const myWork = props.projects.map(pro => <WorkLayout key={pro.name} {...pro} />);

  return <>{myWork}</>;
};

export default Work;
