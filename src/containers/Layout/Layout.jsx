import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/navigation/toolbar/Toolbar'
import { Home } from '../../components/home/Home'
import { Switch, Route } from "react-router-dom";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/navigation/footer/Footer';
import Projects from '../../components/projects/Projects';
import eng from '../../assets/translations/eng.json';
import fr from '../../assets/translations/fr.json';
import { LanguageContext } from '../../context/context'
import Resume from '../../components/resume/Resume'
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

export default class Layout extends Component {

    toggleLanguage = () => {
        this.setState({ lang: this.state.lang === fr ? eng : fr })
    }

    state = {
        lang: eng,
        toggleLanguage: this.toggleLanguage
    }
    render() {
        // console.log(eng)
        return (
            <LanguageContext.Provider value={this.state}>
                <div className={classes.Layout} >

                    <Toolbar context={this.state.context} />
                    <Route render={({ location }) => (

                        <TransitionGroup component={null}>
                            <CSSTransition
                                key={location.key}
                                timeout={650}
                                classNames="fade">
                                <Switch location={location}>
                                    <Route path="/" exact>
                                        <Home />
                                    </Route>
                                    <Route path="/projects">
                                        <Projects />
                                    </Route>
                                    <Route path="/resume">
                                        <Resume />
                                    </Route>
                                    <Route path="/contact">
                                        <Contact />
                                    </Route>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )} />
                    {/* <Footer></Footer> */}
                </div>
            </LanguageContext.Provider>
        )
    }
}