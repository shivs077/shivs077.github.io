import React, { useEffect } from 'react';
import Heading from '../content/Heading';

const Home = () => {
  useEffect(() => {
    document.title = 'My Portfolio | Home';
  }, []);
  return (
    <main id="home">
      <Heading lg="Shivam" span="Bisht" sm="Web Developer, Programmer and More..." />
      <div className="icons">
        <a href="https://www.linkedin.com/in/shivam-bisht-059b2917b/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/shivs077" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href="https://medium.com/@shivambisht.1998" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium fa-2x" />
        </a>
        <a href="https://codepen.io/shivs077" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-codepen fa-2x" />
        </a>
      </div>
    </main>
  );
};

export default Home;

/* <i class="fas fa-angle-double-right"></i> */
