import React from 'react'
import classes from './Home.module.css'
import github1 from '../../assets/images/github1.svg'
import arrow from '../../assets/images/DownArrow.svg'
// import linkedin from '../../assets/images/linkedin.svg'
// import github2 from '../../assets/images/github2.svg'
// import resume from '../../assets/images/resume.jpg'
// import javascript from '../../assets/images/javascript.jpg'
// import Card from '../card/Card'
import Projects from '../projects/Projects'
import { LanguageContext } from '../../context/context'
import Main from '../main/Main'

// https://coolors.co/424874-fdfdff-a6b1e1-393d3f-c6c5b9

export const Home = (props) => {

    return (
        <LanguageContext.Consumer>
            {({ lang }) => {
                return (
                    <main className={classes.Home}>

                        <section className={classes.MainSection}>
                            <Main></Main>
                        </section>

                        <section className={classes.ProjectSection}>
                            <Projects></Projects>
                        </section>

                        <section className={classes.AboutSection} style={{ margin: '50px' }}>About me</section>
                    </main>

                )
            }}
        </LanguageContext.Consumer>
    )
}
