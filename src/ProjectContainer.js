import React, { Component } from 'react';
import Project from './Project.js';
import './ProjectContainer.scss';

import terminal1 from './assets/images/terminal-1-3.png';
import terminal2 from './assets/images/terminal-2-3.png';
import terminal3 from './assets/images/terminal-3-3.png';

import bikeFinder1 from './assets/images/bikefinder-1.png';
import bikeFinder2 from './assets/images/bikefinder-2.png';
import bikeFinder3 from './assets/images/bikefinder-3.png';
import bikeFinder4 from './assets/images/bikefinder-4.png';

import topics1 from './assets/images/topics-1.png';
import topics2 from './assets/images/topics-2.png';
import topics3 from './assets/images/topics-3.png';

import hiddenGems1 from './assets/images/hidden_gems1.png';
import hiddenGems2 from './assets/images/hidden_gems2.png';
import hiddenGems3 from './assets/images/hidden_gems3.png';

class ProjectContainer extends Component {
    static defaultProps = {
        projects: [
            {
                name: 'Hidden Gems',
                images: [hiddenGems1, hiddenGems2, hiddenGems3],
                description: ["A travel app where users can search for and share unique and interesting places to explore"],
                github: "https://github.com/tessssssssy/hidden-gems-client",
                website: "https://hiddengems.netlify.app"
            },
            {
                name: 'Bike Finder',
                images: [bikeFinder1, bikeFinder2, bikeFinder3, bikeFinder4],
                description: ["A two way marketplace application for a peer to peer bike share service, developed in Ruby on Rails"],
                github: "https://github.com/tessssssssy/bikeshare-app",
                website: "https://damp-plateau-00756.herokuapp.com"
            },
            {
                name: 'Topics Board',
                images: [topics1, topics2, topics3],
                description: ["A class help topic suggestion board, developed in Ruby on Rails"],
                github: "https://github.com/tessssssssy/topics-board",
                website: null
            },
            { 
                name: 'Activity Tracker', 
                images: [ terminal1, terminal2, terminal3 ], 
                description: ["A command line based fitness app written in Ruby. The activity tracker allows users to track exercise progress by recording activities including running, cycling, swimming, walking and hiking. Users can record the time and distance of each workout and use the app to calculate their monthly and overall totals for each exercise type."],
                github: "https://github.com/tessssssssy/terminal-app",
                website: null
            }
        ]
    }
    render() {
        return (
            <div id="#portfolio" className="ProjectContainer">
                {this.props.projects.map(project => <Project name={project.name} images={project.images} description={project.description} github={project.github} website={project.website}/>)}
            </div>
        )
    }
}

export default ProjectContainer;
