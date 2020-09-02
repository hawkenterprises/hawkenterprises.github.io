import React, { Component, Fragment } from "react";
import styles from "../../static/Home1.module.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.navbar}>
        <h2 id="navBarTitle">Your Dreamy Botique</h2>
      </div>
    );
  }
}
