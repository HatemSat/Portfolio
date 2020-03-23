import React from 'react'
import classes from './Backdrop.module.css'
import { LanguageContext } from '../../../context/context'

const Backdrop = () => {
    return (
        <LanguageContext.Consumer>
            {({ isBurgerOpen,toggleBurger }) => {
                if (isBurgerOpen) {
                    return (
                        <div onClick={toggleBurger} className={classes.Backdrop}>
                        </div>
                    )
                }
            }}
        </LanguageContext.Consumer>

    )
}

export default Backdrop
