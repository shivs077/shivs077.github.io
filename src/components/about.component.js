import React, { useEffect } from 'react';
import Image from '../img/portrait1.jpg';
import Footer from './Footer';
import Heading from '../content/Heading';
import Image2 from '../img/portrait2.jpg';

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
              Passionate developer and programmer with a proven track record in crafting dynamic Web applications using
              ReactJS and its complementary libraries. Proficient in diverse frameworks including NextJs and React
              Native, complementing professional experience. Holder of a B.Tech. degree in IT from GGSIPU, Delhi. IT. A
              cat person.
            </p>
          </div>
          <div className="job job1">
            <h3>JS Frameworks</h3>
            <p>
              Enthusiastic about ReactJS & MERN stack. Also have project in NextJS, IONIC and React Native. Have Framer
              motion & Redux toolkit experience as well.
            </p>
          </div>
          <div className="job job2">
            <h3>Styling</h3>
            <p>
              Have a good grasp of CSS. I've also worked with SCSS, TailwindCSS, BootStrap, Material UI, Grommet and
              JS-in-CSS like Styled-components.
            </p>
          </div>
          <div className="job job3">
            <h3>Work Experience</h3>
            <p>
              Day to day affairs include working as a developer across various projects and managing other developers
              across a couple of them by scoping out their tasks and reviewing their code.
            </p>
          </div>
        </div>
        <div className="about-portrait2">
          <img src={Image2} alt="Portrait" />
          <p className="about-portrait-caption">Explaining the frontend architecture at the annual town hall</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
