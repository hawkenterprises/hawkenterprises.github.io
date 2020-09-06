import React, { Component } from 'react'
import styles from "../../static/widgets.module.css"
//TODO create a buton wrapper with a facility to re style it by passing classname as prop

export default class Button extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button className={this.props.className ? this.props.className : styles.button}>{this.props.children}</button>
        )
    }
}