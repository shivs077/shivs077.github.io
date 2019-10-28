import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./components/home.component";
import AboutPage from "./components/about.component";
import WorkPage from "./components/work.component";
import ContactPage from "./components/contact.component";
import BlogPage from "./components/BlogPost";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/work" component={WorkPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogPage} />
      </Router>
    );
  }
}

export default App;
