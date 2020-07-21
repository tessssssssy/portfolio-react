import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.js";
import ProjectContainer from "./ProjectContainer.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import BoxContainer from "./BoxContainer.js";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const portfolioRef = React.createRef()
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProjectContainer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
