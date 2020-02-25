import React from 'react'
import classes from './Toolbar.module.css'
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <li>Projects</li>
                    <li>Resume</li>
                    <Link to="/contact">Contact</Link>
                    {/* <li>Blog</li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Toolbar
