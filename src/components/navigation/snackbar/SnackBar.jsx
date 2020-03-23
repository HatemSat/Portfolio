import React, { Component } from "react";
import classes from "./SnackBar.module.css";

class SnackBar extends Component {
    render() {
        let activeClasses;
        if (this.props.isVisible) {
            activeClasses = [classes.SnackBar, classes.Show];
        } else {
            activeClasses = [classes.SnackBar];
        }
        return (
            <div className={activeClasses.join(" ")}>{this.props.message}</div>
        );
    }
}

export default SnackBar;
