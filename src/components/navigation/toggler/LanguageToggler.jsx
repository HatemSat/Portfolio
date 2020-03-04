import React from 'react'
import Aux from '../../../hoc/auxilliary/Auxilliary'
import classes from './LanguageToggler.module.css'
import { Link } from 'react-router-dom'
import lang from '../../../assets/images/lang.svg'
import langColored from '../../../assets/images/lang-white.svg'

export const LanguageToggler = (props) => {

    const onEnter = () => {
        document.querySelector(`.${classes.Language} > a`).style.color = '#edfff1'
        document.querySelector('.Black').style.display = 'none'
        document.querySelector('.White').style.display = 'block'
    }
    const onLeave = () => {
        document.querySelector(`.${classes.Language} > a`).style.color = 'black'
        document.querySelector('.Black').style.display = 'block'
        document.querySelector('.White').style.display = 'none'
    }

    return (
        <Aux>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave} className={classes.Language}>
                <Link to="#" onClick={props.changeLanguage}>{props.language === "English" ? "Français" : "English"}</Link>
                <img className="Black" src={lang} alt="Language icon" />
                <img className="White" style={{ display: 'none' }} src={langColored} alt="Language icon" />
            </li>
        </Aux>
    )
}
