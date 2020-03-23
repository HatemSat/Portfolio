import React from 'react'
import Aux from '../../../hoc/auxilliary/Auxilliary'
import classes from './LanguageToggler.module.css'
import lang from '../../../assets/images/lang.svg'
import langColored from '../../../assets/images/lang-white.svg'

export const LanguageToggler = (props) => {

    const onEnter = () => {
        document.querySelector(`.${classes.Language} > button`).style.color = '#9c9c9c'
        document.querySelector('.Black').style.display = 'none'
        document.querySelector(`.${classes.White}`).style.display = 'block'
        document.querySelector(`.${classes.White}`).classList.add(classes.WhiteApp)
    }
    const onLeave = () => {
        document.querySelector(`.${classes.Language} > button`).style.color = 'black'
        document.querySelector('.Black').style.display = 'block'
        document.querySelector(`.${classes.White}`).style.display = 'none'
    }

    return (
        <Aux>
            <li onMouseEnter={onEnter} onMouseLeave={onLeave} className={classes.Language}>
                <button href="#" to="#" onClick={props.changeLanguage}>{props.language === "English" ? "Français" : "English"}</button>
                <img onClick={props.changeLanguage} className="Black" src={lang} alt="Language icon" />
                <img
                    className={classes.White}
                    onClick={props.changeLanguage}
                    style={{ display: 'none' }}
                    src={langColored}
                    alt="Language icon" />
            </li>
        </Aux>
    )
}
