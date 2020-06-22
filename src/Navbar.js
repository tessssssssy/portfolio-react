import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
        <nav>
        <div class="nav-links-container">
          <a href="./about.html" class="nav-link">About</a>
          <a href="./index.html#portfolio" class="nav-link">Portfolio</a>
          <a href="./contact.html" class="nav-link">Contact</a>
          <a href="./blog.html" class="nav-link">Blog</a>
          <a href="https://github.com/tessssssssy" class="nav-link" target="_blank">Github</a>
        </div>
        <div id="hamburger"><i class="fa fa-bars"></i></div>
      </nav>
        )
    }
}

export default Navbar;