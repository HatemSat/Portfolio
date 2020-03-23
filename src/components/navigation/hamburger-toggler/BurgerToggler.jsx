import React from 'react'
import classes from './BurgerToggler.module.css'
import { LanguageContext } from '../../../context/context'

const BurgerToggler = () => {
    return (
        <LanguageContext.Consumer>
            {({ toggleBurger }) => (
                <div onClick={toggleBurger} className={classes.Hamburger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}
        </LanguageContext.Consumer>
    )
}

export default BurgerToggler
