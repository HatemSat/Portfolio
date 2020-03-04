import React from 'react'
import classes from './Home.module.css'
// import linkedin from '../../assets/images/linkedin.svg'
import github1 from '../../assets/images/github1.svg'
// import github2 from '../../assets/images/github2.svg'
import arrow from '../../assets/images/DownArrow.svg'
// import resume from '../../assets/images/resume.jpg'
// import javascript from '../../assets/images/javascript.jpg'
// import Card from '../card/Card'
import Projects from '../projects/Projects'

import { LanguageContext } from '../../context/context'
// https://coolors.co/424874-fdfdff-a6b1e1-393d3f-c6c5b9

export const Home = (props) => {
    const arrowClickHandler = (e) => {
        window.scrollTo({
            top: 800,
            left: 0,
            behavior: 'smooth'
        });
    }
    return (
        <LanguageContext.Consumer>
            {({ lang }) => {
                return (
                    <main className={classes.Home}>
                        <section className={classes.MainSection}>
                            <div className={classes.GithubIconContainer}>
                                <a className={classes.GithubIcon} rel="noopener noreferrer" target="_blank" href='https://github.com/HatemSat'>
                                    <img alt="Github Icon" src={github1}></img>
                                </a>
                                <h2>Hatem Satouri</h2>
                                <h3>{lang.Developer}</h3>
                            </div>
                            <div className={classes.DownArrowContainer}>
                                <img alt="Down Arrow" onClick={arrowClickHandler} className={classes.DownArrow} src={arrow}></img>
                            </div>
                        </section>
                        <section className={classes.ProjectSection}>
                            <Projects></Projects>
                        </section>
                        <section style={{ margin: '50px' }}>About me</section>
                    </main>

                )
            }}
        </LanguageContext.Consumer>
    )
}
