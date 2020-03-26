import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./Layout.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Toolbar from "../../components/navigation/toolbar/Toolbar";
import Contact from "../../components/contact/Contact";
import Home from "../../components/home/Home";
import Projects from "../../components/projects/Projects";
import Resume from "../../components/resume/Resume";
import eng from "../../assets/translations/eng.json";
import fr from "../../assets/translations/fr.json";
import { LanguageContext } from "../../context/context";
import HamburgerMenu from "../../components/navigation/hamburger-menu/HamburgerMenu";
import ScrollTop from "../../components/navigation/scroll-top/ScrollTop";

export default class Layout extends Component {
    toggleLanguage = () => {
        this.setState({ lang: this.state.lang === fr ? eng : fr });
    };
    toggleBurger = () => {
        // this.setState({ isBurgerOpen: true })
        this.setState(prevState => {
            return { isBurgerOpen: !prevState.isBurgerOpen };
        });
    };
    state = {
        lang: fr,
        toggleLanguage: this.toggleLanguage,
        isBurgerOpen: false,
        toggleBurger: this.toggleBurger
    };
    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                <div className={classes.Layout}>
                    <Toolbar />
                    <HamburgerMenu />
                    <Route
                        render={({ location }) => (
                            <TransitionGroup component={null}>
                                <CSSTransition
                                    key={location.key}
                                    timeout={650}
                                    classNames="fade">
                                    <ScrollTop>
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
                                    </ScrollTop>
                                </CSSTransition>
                            </TransitionGroup>
                        )}
                    />
                    {/* <Footer></Footer> */}
                </div>
            </LanguageContext.Provider>
        );
    }
}
