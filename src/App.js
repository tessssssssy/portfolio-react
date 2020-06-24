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

function App() {
  return (
    <div className="App">
     <Landing />
     <Navbar/>
     <ProjectContainer/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
