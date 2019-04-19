import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home.component";
import About from "./components/about.component";
import Work from "./components/work.component";
import Contact from "./components/contact.component";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    );
  }
}

export default App;
