import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing.js';
import ProjectContainer from './ProjectContainer.js';
import About from './About.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import BoxContainer from './BoxContainer.js';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Landing/>
     <Navbar/>
     <Route exact path="/" component={ProjectContainer} />
     <Route exact path="/about" component={About} />
     <Route exact path="/contact" component={Contact} />
     <Footer/>
    </div>
  );
}

export default App;
