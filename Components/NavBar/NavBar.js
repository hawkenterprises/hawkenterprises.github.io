import React, { Component, Fragment } from "react";
import Button from '../../widgets/Button';
import styles from "../../static/Home1.module.css";
import styles2 from "../../static/widgets.module.css"
export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className={styles.navbar}>

        <ul>
          <li><h2 id="navBarTitle">Your Dreamy Botique</h2></li>
          <li><button className={styles2.button}>Login</button></li>
        </ul>

      </header>
    );
  }
}
