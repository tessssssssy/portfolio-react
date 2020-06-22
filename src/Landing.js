import React, { Component } from 'react';
import './Landing.scss';

class Landing extends Component {
    render() {
        return (
            <div class="landing">
                <div class="landing-container">
                    <div class="heading-container">
                        <h1>Welcome to my Portfolio Site</h1>
                    </div>
                    <h3>Tessa Fabry - Full Stack Web Developer</h3>
                    <a href="#portfolio">View Work</a>
                </div>      
            </div>
        )
    }
}

export default Landing;