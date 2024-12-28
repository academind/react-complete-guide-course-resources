import React, { Component } from "react";

export default class TabButton extends Component {
  handleClick = (e) => {
    console.log(e.target);
  };

  render() {
    return (
      <li>
        <button onClick={this.handleClick}>{this.props.children}</button>
      </li>
    );
  }
}
