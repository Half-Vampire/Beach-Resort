import React, { Component } from "react";
import loadingGif from "../images/gif/loading-gear.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h4>Rooms Data Loading...</h4>
        <img src={loadingGif} alt="Loading" />
      </div>
    );
  }
}
