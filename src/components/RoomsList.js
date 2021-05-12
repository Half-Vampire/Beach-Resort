import React, { Component } from "react";
import Room from "./Room";

export default class RoomsList extends Component {
  render() {
    const { rooms } = this.props;
    if (rooms.length === 0) {
      return (
        <>
          <div className="empty-search">
            <h3>Unfortunately no rooms matched your search parameters.</h3>
          </div>
        </>
      );
    }
    return (
      <>
        <section className="roomslist">
          <div className="roomslist-center">
            {rooms.map((room) => {
              return <Room key={room.id} room={room}></Room>;
            })}
          </div>
        </section>
      </>
    );
  }
}
