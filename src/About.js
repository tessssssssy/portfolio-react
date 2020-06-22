import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render() {
        return (
            <div className="About">
                <h2>About Me</h2>
                <h3>A little bit about me</h3>
      <div class="bio">
        <img src="images/self-portrait.jpg" alt="self portrait"/>
        <p>
          My name is Tessa Fabry.  About a year ago I decided to teach myself how to code. 
          Now I'm enrolled in the FastTrack Web Development Bootcamp at Coder Academy, Melbourne. 
          Through this course, I aim to greatly expand on my self taught knowledge, with the goal of 
          gaining employment as a full stack developer on completion. 
        </p>
      </div>
      <h3>Skills</h3>
      <div class="skills-container">
        <div class="skill">
          <i class="fab fa-html5"></i>
          <p>HTML</p>
        </div>
        <div class="skill">
          <i class="fab fa-css3-alt"></i>
          <p>CSS</p>
        </div>
        <div class="skill">
          <i class="fab fa-js-square"></i>
          <p>Javascript</p>
        </div>
        <div class="skill">
          <img src="https://img.icons8.com/ios/50/000000/ruby-programming-language.png"alt="ruby logo"/>
          <p>Ruby</p>
        </div>
      </div>
      </div>
        )
    }
}

export default About;
