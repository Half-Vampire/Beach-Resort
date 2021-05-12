import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    const { children, title, subtitle } = this.props;
    return (
      <div className="banner">
        <h1>{title}</h1>
        <div></div>
        <p>{subtitle}</p>
        {children}
      </div>
    );
  }
}
