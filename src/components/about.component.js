import React from "react";
import Image from "../img/portrait1.jpg";
import Footer from "./Footer";
import Heading from "../content/Heading";
import Aux from "../hoc/Auy";

const about = () => {
  document.title = "My Portfolio | About";
  return (
    <Aux>
      <main id="about">
        <Heading
          lg="About"
          span="Me"
          sm="A few things about me..." 
        />
        <div className="about-info">
          <img src={Image} alt="" className="bio-image" />
          <div className="bio">
            <h2 className="text-secondary">Bio</h2>
            <p>
              I'm an Indian full stack developer, designer and programmer. I've been working with web frameworks like ionic and libraries like ReactJS.
              I've also been a data geek and would love to explore more into that field. I'm pursuing B.Tech. from GGSIPU, Delhi in IT.

            </p>
          </div>
          <div className="job job1">
            <h3>Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              I've worked with MERN stack.
              I also worked with IONIC 3 (uses Angular 2+) to develop a hybrid Weather app which included accessing data from a remote Weather API.
            </p>
          </div>
          <div className="job job2">
            <h3>Designers</h3>
            <h6>Front End Developer</h6>
            <p>
              I've got a good practice with Photoshop. Ruining my friends' pictures in photoshop is fun. I'm having a good grasp of CSS also SCSS.
              I've also worked with CSS libraries like BootStrap and Material UI. Other frontend technologies include JQuery and ReactJS.
            </p>
          </div>
          <div className="job job3">
            <h3>Data Science</h3>
            <h6>Machine Learning and AI</h6>
            <p>
              I've got hands on experience in the field of Python and Machine Learning and related libraries and packages like pandas, numpy, scipy, scikit-learn.
              I made several small scale projects. I've also touched the field of Artificial Intelligence and currently in process of developing a Self-driving Car Simulator.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Aux>
  );
};

export default about;
