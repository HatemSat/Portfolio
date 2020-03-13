import React from 'react'
import Aux from '../../hoc/auxilliary/Auxilliary'
import classes from './Main.module.css'
import github1 from '../../assets/images/github1.svg'
import arrow from '../../assets/images/DownArrow.svg'
import { LanguageContext } from '../../context/context'

const Main = () => {
    const arrowClickHandler = (e) => {
        window.scrollTo({
            top: 600,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <LanguageContext.Consumer>
            {({ lang }) => {
                return (
                    <Aux>
                        <div className={classes.GithubIconContainer}>
                            <a className={classes.GithubIcon} rel="noopener noreferrer" target="_blank" href='https://github.com/HatemSat'>
                                <img alt="Github Icon" src={github1}></img>
                            </a>
                            <h2>Hatem Satouri</h2>
                            <h3>{lang.home.developer}</h3>
                        </div>
                        <div className={classes.DownArrowContainer}>
                            <img alt="Down Arrow" onClick={arrowClickHandler} className={classes.DownArrow} src={arrow}></img>
                        </div>
                    </Aux>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default Main
