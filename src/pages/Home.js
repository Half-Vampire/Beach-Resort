import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/Featured";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero>
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
      </>
    );
  }
}
