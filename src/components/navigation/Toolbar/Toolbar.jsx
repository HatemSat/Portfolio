import React from 'react'
import classes from './Toolbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/spiral.svg'

const Toolbar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Link to='/'>
                    <img src={logo}></img>
                </Link>
            </div>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/">Projects</Link>
                        <Link to="/">Resume</Link>
                        <Link to="/contact">Contact</Link>
                        {/* <li>Blog</li> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Toolbar
