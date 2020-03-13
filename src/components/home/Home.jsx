import React from 'react'
import classes from './Home.module.css'
import Projects from '../projects/Projects'
import { LanguageContext } from '../../context/context'
import Main from '../main/Main'
import About from '../about/About'
import Contact from '../contact/Contact'
import { Footer } from '../footer/Footer'


const Home = (props) => {

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

                        <section className={classes.AboutSection} style={{ margin: '50px' }}>
                            <About></About>
                        </section>

                        <section className={classes.ContactSection}>
                            <Contact></Contact>
                        </section>
                        <section className={classes.FooterSection}>
                            <Footer></Footer>
                        </section>
                    </main>

                )
            }}
        </LanguageContext.Consumer>
    )
}

export default Home