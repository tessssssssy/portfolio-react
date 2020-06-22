import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
    render() {
        return (
            <div class="Project" id="terminal-app">
                <h3>Activity Tracker</h3>
                <div class="project-content">
                <div class="slide-container">
                    <span id="slider-image-1"></span>
                    <span id="slider-image-2"></span>
                    <span id="slider-image-3"></span>
                <div class="image-container">
                    <img src="./images/terminal-1-3.png" class="slider-image" alt="app menu"/>
                    <img src="./images/terminal-2-3.png" class="slider-image" alt="table of activities"/>
                    <img src="./images/terminal-3-3.png" class="slider-image" alt="table of personal records"/>
                </div>
                <div class="button-container">
                    <a href="#slider-image-1" class="slider-button"></a>
                    <a href="#slider-image-2" class="slider-button"></a>
                    <a href="#slider-image-3" class="slider-button"></a>
                </div>
            </div>
            <p>
              A command line based fitness app written in Ruby. The activity tracker allows users to track exercise progress
              by recording activities including running, cycling, swimming, walking and hiking. Users can record the time and 
              distance of each workout and use the app to calculate their monthly and overall totals for each exercise type.
            </p>
          </div>
          <a class="github" href="https://github.com/tessssssssy/terminal-app" target="_blank">Github</a>
        </div>
        )
    }
}

export default Project;

