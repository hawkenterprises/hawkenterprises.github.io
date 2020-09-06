import styles from "../static/Home1.module.css";
import NavBar from "../Components/NavBar";
import React, { Component } from "react";
import Link from "../Components/helpers/Link"

export default class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className={styles.root}>
          <h1 className={styles.title}>Your Beauty Botique</h1>
          <h3>Introduction</h3>
          <Link href='login'><button className={styles.button}>Login</button></Link>
          <p className={styles.description}>this is a website you know </p>
        </div>
      </div >
    )
  }
}