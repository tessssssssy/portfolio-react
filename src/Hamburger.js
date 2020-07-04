import React, { Component } from 'react';

class Hamburger extends Component {
    render(){
        return (
            <div id="hamburger" ><i className="fa fa-bars" onClick={this.props.showMenu}></i></div>
        )
    }
        
}

export default Hamburger