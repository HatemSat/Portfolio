import React from 'react'
import classes from './NavLinks.module.css'
import { LanguageContext } from '../../../context/context'
import { Link } from 'react-router-dom'
import { LanguageToggler } from '../toggler/LanguageToggler'

const NavLinks = (props) => {
    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (
                <ul className={classes.NavLinks}>
                    {/* {props.children} */}
                    <li><Link to="/">{lang.toolbar.title}</Link></li>
                    {/* <li><Link to="/projects">{lang.toolbar.projects}</Link></li> */}
                    <li><Link to="/resume">{lang.toolbar.resume}</Link></li>
                    {/* <li><Link to="/contact">{lang.toolbar.contact}</Link></li> */}
                    <LanguageToggler changeLanguage={toggleLanguage} language={lang.language}></LanguageToggler>
                </ul>
            )}
        </LanguageContext.Consumer>
    )
}

export default NavLinks
