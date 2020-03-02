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
        <main className={classes.Home}>


            <div className={classes.MainSection}>
                {/* <h1>Welcome</h1> */}
                <div className={classes.GithubIconContainer}>
                    <a className={classes.GithubIcon} rel="noopener noreferrer" target="_blank" href='https://github.com/HatemSat'>
                        <img alt="Github Icon" src={github1}></img>
                    </a>
                    <h2>Hatem Satouri</h2>
                    <h3>Full-stack Developer</h3>
                </div>
                <div className={classes.DownArrowContainer}>
                    <img alt="Down Arrow" onClick={arrowClickHandler} className={classes.DownArrow} src={arrow}></img>
                </div>
            </div>


            <div className={classes.ProjectSection}>
                <Projects></Projects>
            </div>
        </main>
    )
}
