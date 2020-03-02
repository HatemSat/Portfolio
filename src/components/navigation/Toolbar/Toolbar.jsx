import React from 'react'
import classes from './Toolbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/spiral.svg'

const Toolbar = (props) => {
    const languageTogglerHandler = () => { 
        alert('workin')
    }

    return (
        <div>
            <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <Link to='/'>
                    <img alt="Website Logo" src={logo}></img>
                </Link>
            </div>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/">Resume</Link>
                        <Link to="/contact">Contact</Link>
                        <Link onClick={languageTogglerHandler}>{props.context.Home}</Link>
                        {/* <li>Blog</li> */}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Toolbar
