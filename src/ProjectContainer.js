import React, { Component } from 'react';
import Project from './Project.js';
import './ProjectContainer.scss';

class ProjectContainer extends Component {
    render() {
        return (
            <div className="ProjectContainer">
                <h3>Portfolio</h3>
                <Project/>
            </div>
        )
    }
}

export default ProjectContainer;
