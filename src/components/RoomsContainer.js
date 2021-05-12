import React, { Component } from "react";
import { RoomContext } from "../context";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

export default class RoomsContainer extends Component {
  static contextType = RoomContext;
  render() {
    let value = this.context;
    const { loading, sortedRooms, rooms } = value;
    if (loading) {
      return <Loading></Loading>;
    }
    return (
      <div>
        <RoomsFilter rooms={rooms}></RoomsFilter>
        <RoomsList rooms={sortedRooms}></RoomsList>
      </div>
    );
  }
}
