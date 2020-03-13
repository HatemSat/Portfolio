import React from 'react'
import classes from './Toolbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/spiral.svg'
import { LanguageContext } from '../../../context/context';
import Aux from '../../../hoc/auxilliary/Auxilliary';
import { LanguageToggler } from '../toggler/LanguageToggler';

const Toolbar = (props) => {

    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (
                <Aux>
                    <header className={classes.Toolbar}>
                        <div className={classes.Logo}>
                            <Link to='/'>
                                <img alt="Website Logo" src={logo}></img>
                            </Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/">{lang.toolbar.home}</Link></li>
                                <li><Link to="/projects">{lang.toolbar.projects}</Link></li>
                                <li><Link to="/resume">{lang.toolbar.resume}</Link></li>
                                <li><Link to="/contact">{lang.toolbar.contact}</Link></li>
                                <LanguageToggler changeLanguage={toggleLanguage} language={lang.language}></LanguageToggler>
                            </ul>
                        </nav>
                    </header>
                </Aux >
            )}
        </LanguageContext.Consumer>
    )

}

export default Toolbar
