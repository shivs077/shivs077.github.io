import React, { useEffect } from 'react';
import Heading from '../content/Heading';
import Work from '../content/Work';
import Footer from './Footer';

const projects = [
  {
    name: 'Modern Portfolio',
    github: 'https://github.com/shivs077/portfolio',
    preview: 'https://portfolio-jrjmf3wsp-shivs077.vercel.app/',
    description: 'A Mordern Portfolio made with NextJs + TailwindCSS + Framer Motion',
  },
  {
    name: 'useEventEmitter',
    github: 'https://github.com/shivs077/useEventEmitter',
    preview: 'https://5z7t7.csb.app/',
    description: 'A react hook for Reactive Programming',
  },
  {
    name: 'ResponsiveGrid',
    github: 'https://github.com/shivs077/ResponsiveGrid',
    preview: 'https://u5qv3.csb.app/',
    description: 'A react component for Responsive grid layout using Resize Observer',
  },
  {
    name: 'BurgerBuilder',
    github: 'https://github.com/shivs077/BurgerBuilder',
    preview: 'https://shivs077.github.io/BurgerBuilder',
    description: 'An interactive react web app to build and order a burger!',
  },
  {
    name: 'JS - Tooltip',
    github: 'https://github.com/shivs077/js-tooltip',
    preview: 'https://shivs077.github.io/js-tooltip',
    description: 'A Vanilla JS Tooltip for any DOM element',
  },
  {
    name: 'iWeather',
    github: 'https://github.com/shivs077/iWeather',
    preview: 'https://github.com/shivs077/iWeather',
    description: 'An ionic weather app',
  },
  {
    name: 'VoiceEasy',
    github: 'https://github.com/shivs077/VoiceEasy',
    preview: 'https://github.com/shivs077/VoiceEasy',
    description: 'A react native app to search files on device or online using voice command',
  },
  {
    name: 'CoffeeFy',
    github: 'https://github.com/shivs077/coffeefy',
    preview: 'https://github.com/shivs077/coffeefy',
    description: 'A NextJS App to locate coffee shops (Under Development)',
  },
];

const WorkPage = () => {
  useEffect(() => {
    document.title = 'My Portfolio | Work';
  }, []);

  return (
    <>
      <main id="work">
        <Heading lg="My" span="Work" sm="My Few Work Samples..." />
        <div className="projects">
          <Work projects={projects} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WorkPage;
