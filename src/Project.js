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
            <div class="project-info">
                <p>{this.props.description}</p>
                <a className="github" href={this.props.github} target="_blank">Github</a>
                { this.props.website ? <a className="github" href={this.props.website} target="_blank">Website</a> : null }   
            </div>
            <div className="project-image-container">
                <img src={this.props.images[0]} />
                <img src={this.props.images[1]} />
            </div>
            {/* <Carousel className="project-carousel">
                <div>
                    <img src={this.props.images[0]} />
                    <p className="legend">{this.props.description[0]}</p>
                </div>
                <div>
                    <img src={this.props.images[1]} />
                    <p className="legend">{this.props.description[1]}</p>
                </div>
                <div>
                    <img src={this.props.images[2]} />
                    <p className="legend">{this.props.description[2]}</p>
                </div>
            </Carousel> */}
          </div>
          {/* <a className="github" href={this.props.github} target="_blank">Github</a>
          { this.props.website ? <a className="github" href={this.props.website} target="_blank">Website</a> : null } */}
          </div>
        )
    }
}

export default Project;

