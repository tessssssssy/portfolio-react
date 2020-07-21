import React, { Component } from 'react';
import './Project.scss';
// import SimpleModalSlideshow from 'react-simple-modal-slideshow';
// import CSSTransitionGroup from 'react-addons-css-transition-group';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Project extends Component {
    render() {
        return (
            <div class="Project" id="terminal-app">
                <h3>{this.props.name}</h3>
            <div class="project-content">
                {/* <div class="slide-container">
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
            </div> */}
            <Carousel className="project-carousel">
                <div>
                    <img src={this.props.images[0]} />
                    <p className="legend">{this.props.description}</p>
                </div>
                <div>
                    <img src={this.props.images[1]} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={this.props.images[2]} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <p>
              
            </p>
          </div>
          <a className="github" href={this.props.github} target="_blank">Github</a>
          { this.props.website ? <a className="github" href={this.props.website} target="_blank">Website</a> : null }
          </div>
        )
    }
}

export default Project;

