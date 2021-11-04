import React, { useEffect } from 'react';
import Image from '../img/portrait1.jpg';
import Footer from './Footer';
import Heading from '../content/Heading';

const About = () => {
  useEffect(() => {
    document.title = 'My Portfolio | About';
  }, []);
  return (
    <>
      <main id="about">
        <Heading lg="About" span="Me" sm="A few things about me..." />
        <div className="about-info">
          <img src={Image} alt="" className="bio-image" />
          <div className="bio">
            <h2 className="text-secondary">Bio</h2>
            <p>
              An Indian developer and programmer. Professional experience in developing Web apps with ReactJS and
              associated libraries. Also created projects in frameworks like Ionic and React Native. Graduated from
              GGSIPU, Delhi with a degree in B.Tech. IT. A cat person.
            </p>
          </div>
          <div className="job job1">
            <h3>JS Frameworks</h3>
            <p>
              Enthusiastic about MERN stack. Also have project in IONIC and React Native. Have P5.js and React-D3 data
              visualization exposure as well.
            </p>
          </div>
          <div className="job job2">
            <h3>Styling</h3>
            <p>
              Have a good grasp of CSS (also SCSS). I've also worked with CSS libraries like BootStrap, Material UI,
              Grommet and JS-in-CSS like Styled-components.
            </p>
          </div>
          <div className="job job3">
            <h3>Work Experience</h3>
            <p>
              Day to day affairs include working as a developer across three different projects and managing five other
              developers across two of them by scoping out their tasks and reviewing the code.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
