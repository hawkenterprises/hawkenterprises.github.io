import React, { Component } from 'react'
import styles from '../../static/loginForm.module.css'
import Button from "../../widgets/Button"
export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    onUsernameChangeHandler = (username) => { this.setState({ username }) }
    onPasswordChangeHandler = (password) => { this.setState({ password }) }

    render() {
        return (
            <div className={styles.loginForm}>
                <form title="User Login" className={styles.form}>
                    <ul className={styles.ul}>
                        <li>
                            <input type="text"
                                onChange={e => this.onUsernameChangeHandler(e.target.value)}
                                value={this.state.username}
                                placeholder={"Username/Email"} />
                        </li>
                        <li>
                            <input type="password"
                                onChange={e => this.onPasswordChangeHandler(e.target.value)}
                                value={this.state.password}
                                placeholder={"password"} />
                        </li>
                        <li>
                            <Button type={"button"} onClick={this.onSublitClick}>Login</Button>
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}