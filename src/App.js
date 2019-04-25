import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/home.component";
import AboutPage from "./components/about.component";
import WorkPage from "./components/work.component";
import ContactPage from "./components/contact.component";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} noFooter={true} />
        <Route path="/about" component={AboutPage} noFooter={false} />
        <Route path="/work" component={WorkPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    );
  }
}

export default App;
