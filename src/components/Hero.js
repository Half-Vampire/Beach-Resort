import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    const { children, hero } = this.props;
    return <header className={hero}>{children}</header>;
  }
}

Hero.defaultProps = {
  hero: "defaultHero",
};
