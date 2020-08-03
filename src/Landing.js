import React, { Component } from 'react';
import './Landing.scss';
import BoxContainer from "./BoxContainer.js";
import { Link } from 'react-router-dom';


class Landing extends Component {
    handleClick = (ref) =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
    });
    render() {
        const ref = React.createRef()
        return (
            <div class="landing">
                <BoxContainer/>
                <div class="landing-container">
                    {/* <div class="heading-container">
                        <h1>Welcome to my Portfolio Site</h1>
                    </div> */}
                    <h3>Tessa Fabry - Full Stack Web Developer</h3>
                    <Link onClick={() => this.handleClick(ref)}>View Work</Link>
                </div> 
                <div style={{height: "0px"}}ref={ref}></div>     
            </div>
        )
    }
}

export default Landing;