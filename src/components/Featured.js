import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";

export default class Featured extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading } = this.context;
    let rooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room}></Room>;
    });
    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading></Loading> : rooms}
        </div>
      </section>
    );
  }
}
