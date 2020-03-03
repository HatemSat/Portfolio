import React from 'react'
import classes from './Toolbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/spiral.svg'
import { LanguageContext } from '../../context/context';

const Toolbar = (props) => {
    const languageTogglerHandler = () => {
        alert('workin')
    }

    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (
                <div>
                    <header className={classes.Toolbar}>
                        <div className={classes.Logo}>
                            <Link to='/'>
                                <img alt="Website Logo" src={logo}></img>
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                <Link to="/">{lang.Home}</Link>
                                <Link to="/projects">{lang.Projects}</Link>
                                <Link to="/">{lang.Resume}</Link>
                                <Link to="/contact">{lang.Contact}</Link>
                                <Link onClick={toggleLanguage}>lang</Link>
                                {/* <li>Blog</li> */}
                            </ul>
                        </nav>
                    </header>
                </div>
            )}
        </LanguageContext.Consumer>

    )
}

export default Toolbar
