import React, { Component } from 'react';
import Project from './Project.js';
import './ProjectContainer.scss';

class ProjectContainer extends Component {
    static defaultProps = {
        projects: [
            { 
                name: 'Activity Tracker', 
                images: [], 
                description: "A command line based fitness app written in Ruby. The activity tracker allows users to track exercise progress by recording activities including running, cycling, swimming, walking and hiking. Users can record the time and distance of each workout and use the app to calculate their monthly and overall totals for each exercise type.",
                github: "https://github.com/tessssssssy/terminal-app"
            },
            {
                name: 'Bike Finder',
                images: [],
                description: "A two way marketplace application for a peer to peer bike share service, developed in Ruby on Rails",
                github: "https://github.com/tessssssssy/bikeshare-app"
            }
        ]
    }
    render() {
        return (
            <div className="ProjectContainer">
                <h3>Portfolio</h3>
                {this.props.projects.map(project => <Project name={project.name} images={project.images} description={project.description} github={project.github}/>)}
            </div>
        )
    }
}

export default ProjectContainer;
