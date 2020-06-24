import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";

class Box extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { color: this.props.colors[0], square: false };
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }
  pickColor() {
    let newColor;
    if (this.state.color == "white") {
      newColor = "black";
    } else {
      do {
        newColor = choice(this.props.colors);
      } while (newColor === this.state.color);
    }
    this.setState({ color: newColor });
  }
  changeColor() {
    //let newName = choice(this.props.names);
    let newIndex = this.props.colors.indexOf(this.state.color) + 1;
    this.setState(
      this.state.color === "YellowGreen"
        ? { color: "AliceBlue" }
        : { color: this.props.colors[newIndex] }
    );
  }
  changeShape() {
    const currentState = this.state.square;
    this.setState({ square: !currentState });
  }
  handleClick() {
    this.pickColor();
    this.changeShape();
  }
  render() {
    return (
      <div
        className={this.state.square ? "Box-square" : "Box"}
        style={{ backgroundColor: this.state.color }}
        onMouseEnter={this.changeColor}
      />
    );
  }
}

export default Box;