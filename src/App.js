import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/rooms/" component={Rooms}></Route>
          <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
          <Route component={Error}></Route>
        </Switch>
      </>
    );
  }
}
