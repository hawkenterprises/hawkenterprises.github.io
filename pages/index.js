// import Head from "next/head";
import styles from "../static/Home.module.css";
// import { Fragment } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Beauty Botique</h1>
      <h3>Introduction</h3>
      <p className={styles.description}>this is a website you know </p>
    </div>
  );
}
