import React, { Component } from 'react';
import './Project.scss';

class Project extends Component {
    render() {
        return (
            <div class="Project" id="terminal-app">
                <h3>{this.props.name}</h3>
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
              {this.props.description}
            </p>
          </div>
          <a class="github" href={this.props.github} target="_blank">Github</a>
        </div>
        )
    }
}

export default Project;

