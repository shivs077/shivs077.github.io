import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/home.component';
import AboutPage from './components/about.component';
import WorkPage from './components/work.component';
import ContactPage from './components/contact.component';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import KeyboardShortcuts from './components/KeyboardShortcuts';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div id="bg-img"></div>
      <Router basename={process.env.PUBLIC_URL}>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
        {/* <KeyboardShortcuts /> */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
