import React, { Component } from "react";
import classes from "./Contact.module.css";
import { LanguageContext } from "../../context/context";
import axios from "axios";
import SnackBar from "../navigation/snackbar/SnackBar";

class Contact extends Component {
    state = {
        form: {
            name: {
                value: "",
                valid: false
            },
            email: {
                value: "",
                valid: false
            },
            message: {
                value: "",
                valid: false
            },
            button: {
                disabled: true
            }
        },
        isSnackBarVisible: false
    };
    formHandler = e => {
        e.preventDefault();
        const url =
            "https://europe-west1-portfoliohatemsat.cloudfunctions.net/s";

        axios
            .post(url, {
                email: this.state.form.email.value,
                name: this.state.form.name.value,
                message: this.state.form.message.value
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ isSnackBarVisible: true });
        setTimeout(() => {
            this.setState({ isSnackBarVisible: false });
        }, 3000);
    };

    changeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid, buttonDisabled;

        switch (name) {
            case "email":
                valid = emailRegex.test(value);
                break;

            case "name":
                valid = value ? true : false;
                break;

            case "message":
                valid = value ? true : false;
                break;
            default:
                break;
        }

        this.setState({
            form: {
                ...this.state.form,
                [name]: {
                    ...this.state.form[name], value, valid
                }
            }
        }, () => {
            if (this.state.form.email.valid && this.state.form.name.valid && this.state.form.message.valid) {
                buttonDisabled = false;
            } else {
                buttonDisabled = true;
            }
            this.setState({
                form: {
                    ...this.state.form, button: {
                        disabled: buttonDisabled
                    }
                }
            });
        }
        );
    };
    render() {
        return (
            <LanguageContext.Consumer>
                {({ lang }) => {
                    return (
                        <div className={classes.Contact}>
                            <form onSubmit={this.formHandler}>
                                <h3>{lang.contact.call}</h3>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={this.state.form.name.value}
                                        placeholder={lang.contact.name}
                                        name="name"
                                        onChange={this.changeHandler}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows="6"
                                        placeholder="Message"
                                        name="message"
                                        onChange={
                                            this.changeHandler
                                        }></textarea>
                                </div>
                                <div className={classes.Button}>
                                    <button
                                        disabled={
                                            this.state.form.button.disabled
                                        }
                                        type="submit">
                                        {lang.contact.send}
                                    </button>
                                </div>
                            </form>
                            <SnackBar
                                message={lang.contact.snackbar}
                                isVisible={this.state.isSnackBarVisible}
                            />
                        </div>
                    );
                }}
            </LanguageContext.Consumer>
        );
    }
}

export default Contact;
