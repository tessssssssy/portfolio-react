import React, { Component } from 'react';
import './About.scss';
import portrait from "./assets/images/self-portrait.jpg";


class About extends Component {
    render() {
        return (
            <div className="About" id="about">
                <h2>About Me</h2>
                <h3>A little bit about me</h3>
      <div class="bio">
        <img src={portrait} alt="self portrait"/>
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
          <i class="fab fa-html5 icon"></i>
          <p>HTML</p>
        </div>
        <div className="skill">
          <i className="fab fa-css3-alt icon"></i>
          <p>CSS</p>
        </div>
        <div className="skill">
        <img src="https://sass-lang.com/assets/img/styleguide/black-7fd39aa3.png"alt="sass logo"/>
          <p>Sass</p>
        </div>
        <div class="skill">
          <i class="fab fa-js-square icon"></i>
          <p>Javascript</p>
        </div>
        <div class="skill">
          <img src="https://img.favpng.com/8/6/17/node-js-logo-javascript-chrome-v8-web-application-png-favpng-9Q9AKZGAsr46ppYUg1ZKuT9M0.jpg"alt="ruby logo"/>
          <p>Node js</p>
        </div>
        <div class="skill">
          <img src="https://img.icons8.com/ios/50/000000/ruby-programming-language.png"alt="ruby logo"/>
          <p>Ruby</p>
        </div>
        <div class="skill">
          <img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png"alt="rails logo"/>
          <p>Rails</p>
        </div>
        <div class="skill">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"alt="react logo"/>
          <p>React</p>
        </div>
      </div>
      </div>
        )
    }
}

export default About;
