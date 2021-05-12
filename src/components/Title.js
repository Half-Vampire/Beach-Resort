import React, { Component } from "react";

export default class Title extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="section-title">
        <h4>{title}</h4>
        <div></div>
      </div>
    );
  }
}
