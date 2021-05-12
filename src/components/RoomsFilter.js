import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default class RoomsFilter extends Component {
  static contextType = RoomContext;
  render() {
    const {
      handleChange,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets,
      rooms,
    } = this.context;

    let types = getUnique(rooms, "type");
    let finalTypes = [...types, "all"];
    finalTypes = finalTypes.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    let capacities = getUnique(rooms, "capacity");
    capacities = capacities.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    return (
      <section className="filter-container">
        <Title title="search rooms"></Title>
        <form className="filter-form">
          {/* select type */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}>
              {finalTypes}
            </select>
          </div>
          {/* select type ends */}
          {/* guests start */}
          <div className="form-group">
            <label htmlFor="capacity">Guests</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}>
              {capacities}
            </select>
          </div>
          {/* guests end here */}
          {/* price filter starts */}
          <div className="form-group">
            <label htmlFor="price">Room Price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"></input>
          </div>
          {/* price filter ends */}
          {/* room size filter starts */}
          <div className="form-group">
            <label htmlFor="size">Room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input"
              />
            </div>
          </div>
          {/* room size filter ends */}
          {/* breakfast and pets filter */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="breakfast">Breakfast</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">Pets</label>
            </div>
          </div>
          {/* breakfast and pets filter ends */}
        </form>
      </section>
    );
  }
}
