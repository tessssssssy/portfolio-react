import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <a href="https://www.linkedin.com/in/tessa-fabry-80874b69/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://twitter.com/tessssssssy" target="_blank"><i class="fab fa-twitter-square"></i></a>
                <a href="https://www.instagram.com/tessssssssy/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://github.com/tessssssssy" target="_blank"><i class="fab fa-github"></i></a>
            </footer>
        )
    }
}

export default Footer;
