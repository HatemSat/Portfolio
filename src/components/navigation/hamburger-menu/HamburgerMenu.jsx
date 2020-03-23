import React from 'react'
import NavLinks from '../nav-links/NavLinks'
import classes from './HamburgerMenu.module.css'
import { LanguageContext } from '../../../context/context'
import Aux from '../../../hoc/auxilliary/Auxilliary'
import Backdrop from '../backdrop/Backdrop'

const HamburgerMenu = (props) => {

    // let HamburgerClasses = props.

    return (
        <LanguageContext.Consumer>
            {({ lang, isBurgerOpen, toggleBurger }) => {
                const handleClick = () => {
                    toggleBurger()
                }
                let hamburgerClasses
                if (isBurgerOpen) {
                    hamburgerClasses = [classes.HamburgerMenu, classes.Open]
                } else {
                    hamburgerClasses = [classes.HamburgerMenu, classes.Close]
                }
                return (
                    <Aux>
                        <div onClick={handleClick} className={hamburgerClasses.join(' ')}>
                            <NavLinks></NavLinks>
                        </div>
                        <div>
                            <Backdrop></Backdrop>
                        </div>
                    </Aux>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default HamburgerMenu
