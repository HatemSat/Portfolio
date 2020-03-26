import React from "react";
import classes from "./Footer.module.css";
import stackoverflow from "../../assets/images/social/stackoverflow.png";
import linkedin from "../../assets/images/social/linkedin.png";
import copy from "../../assets/images/copy.png";
import { LanguageContext } from "../../context/context";
import SnackBar from "../navigation/snackbar/SnackBar";
import { Component } from "react";

export class Footer extends Component {
    state = {
        isCopied: false
    };
    copyHandler = () => {
        const email = document.querySelector(`.${classes.Email} > a`).innerHTML;
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");

        this.setState({isCopied:true})
        setTimeout(() => {
            this.setState({isCopied:false})
        document.body.removeChild(textArea);
        }, 3000);

    };
    render() {
        return (
            <LanguageContext.Consumer>
                {({ lang }) => (
                    <div className={classes.Footer}>
                        <p className={classes.Email}>
                            <a href="mailto:contact@hatemsat.fr">
                                contact@hatemsat.fr
                            </a>

                            <img
                                src={copy}
                                onClick={this.copyHandler}
                                alt="copy email"
                                title={lang.footer.clipboard.title}
                            />
                        </p>
                        <span className={classes.Social}>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://stackoverflow.com/users/12084088/hatemsat?tab=profile">
                                <img src={stackoverflow} alt="" />
                            </a>
                            <a
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/hatem-satouri/">
                                <img src={linkedin} alt="" />
                            </a>
                        </span>
                        <SnackBar
                            message={lang.footer.clipboard.message}
                            isVisible={this.state.isCopied}
                        />
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    }
}
