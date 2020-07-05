import React, { Component } from 'react';
import './Landing.scss';
import BoxContainer from "./BoxContainer.js";
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div class="landing">
                <BoxContainer/>
                <div class="landing-container">
                    {/* <div class="heading-container">
                        <h1>Welcome to my Portfolio Site</h1>
                    </div> */}
                    <h3>Tessa Fabry - Full Stack Web Developer</h3>
                    <Link to="/portfolio">View Work</Link>
                </div>      
            </div>
        )
    }
}

export default Landing;