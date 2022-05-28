import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Navigation from './components/Navigation';
import routes from 'routes';
import Route from 'Route';
// import KeyboardShortcuts from './components/KeyboardShortcuts';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div id="bg-img"></div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Navigation showMenu={showMenu} setShowMenu={setShowMenu} clicked={clicked} setClicked={setClicked} />
        {/* <KeyboardShortcuts /> */}
        {routes.map(route => (
          <Route key={route.path} {...route} clicked={clicked} setClicked={setClicked} />
        ))}
      </Router>
    </>
  );
};

export default App;
