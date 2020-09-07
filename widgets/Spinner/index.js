import React, { Component } from 'react'

import styles from "../../static/widgets.module.css"

export default class Spinner extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <img className={styles.spinner}
                    src="/ybb_logo.png"
                />
            </div >
        )
    }
}