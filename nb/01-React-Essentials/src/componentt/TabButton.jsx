import React, { Component } from "react";

export default class TabButton extends Component {
  render() {
    return (
      <li>
        <button
          className={this.props.isSelected ? "active" : ""}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </button>
      </li>
    );
  }
}
