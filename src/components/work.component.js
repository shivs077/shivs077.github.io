import React, { useEffect } from 'react';
import Heading from '../content/Heading';
import Work from '../content/Work';
import Footer from './Footer';

const projects = [
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
    name: 'VoiceEasy',
    github: 'https://github.com/shivs077/VoiceEasy',
    preview: 'https://shivs077.github.io/VoiceEasy',
    description: 'A react native app to search files on device or online using voice command',
  },
  {
    name: 'BurgerBuilder',
    github: 'https://github.com/shivs077/BurgerBuilder',
    preview: 'https://shivs077.github.io/BurgerBuilder',
    description: 'An interactive react web app to build and order a burger!',
  },
  {
    name: 'iWeather',
    github: 'https://github.com/shivs077/iWeather',
    preview: 'https://shivs077.github.io/iWeather',
    description: 'An ionic weather app',
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