import React, { Component } from 'react';
import './Navbar.scss';
import Hamburger from './Hamburger.js';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: false }
  }

  toggleDropDown = () => {
    this.setState((currState) => { 
      return { dropDown: !currState.dropDown}
    })
  }

  handleClick = () => {
    this.toggleDropDown()
  }
    render() {
        return (
        <nav>
        <div className="nav-links-container" style={{display: !this.state.dropDown ? "flex" : "block"}}>
          <Link  to="/about" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Portfolio</Link>
          <Link to="/contact" class="nav-link">Contact</Link>
          <a href="https://github.com/tessssssssy" class="nav-link" target="_blank">Github</a>
        </div>
        <Hamburger showMenu={this.handleClick}/>
      </nav>
        )
    }
}

export default Navbar;