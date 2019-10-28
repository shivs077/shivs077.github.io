import React from "react";
import Heading from "../content/Heading";
import Aux from "../hoc/Auy";

const home = () => {
  document.title = "My Portfolio | Home";
  return (
    <Aux>
      <main id="home">
        <Heading
          lg="Shivam"
          span="Bisht"
          sm="Web Developer, Programmer and Designer"
        />
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/shivam-bisht-059b2917b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a
            href="https://github.com/shivs077"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="https://medium.com/@shivambisht.1998
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-medium fa-2x" />
          </a>
        </div>
      </main>
    </Aux>
  );
};

export default home;
