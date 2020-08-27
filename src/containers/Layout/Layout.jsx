import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import classes from "./Layout.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Toolbar from "../../components/navigation/tool-bar/Toolbar";
import Home from "../../components/home/Home";
import Resume from "../../components/resume/Resume";
import eng from "../../context/eng.json"
import fr from "../../context/fr.json";
import { LanguageContext } from "../../context/context";
import HamburgerMenu from "../../components/navigation/hamburger-menu/HamburgerMenu";
import ScrollTop from "../../components/navigation/scroll-top/ScrollTop";
import Details from '../../components/details/Details'


import vue from "../../assets/images/stack/vue.png";
import bulma from "../../assets/images/stack/bulma.png";

import toulousewifi from "../../assets/gif/toulousewifi.webm";
import toulousewifi1 from "../../assets/images/projects/wifitoulouse/wifitoulouse1.jpg";
import toulousewifi2 from "../../assets/images/projects/wifitoulouse/wifitoulouse2.jpg";
import toulousewifi3 from "../../assets/images/projects/wifitoulouse/wifitoulouse3.jpg";
import toulousewifi4 from "../../assets/images/projects/wifitoulouse/wifitoulouse4.jpg";
import toulousewifi5 from "../../assets/images/projects/wifitoulouse/wifitoulouse5.jpg";
import toulousewifi6 from "../../assets/images/projects/wifitoulouse/wifitoulouse6.jpg";

export default class Layout extends Component {

    toggleLanguage = () => {
        this.setState({ lang: this.state.lang === fr ? eng : fr });
    };

    toggleBurger = () => {
        this.setState(prevState => {
            return { isBurgerOpen: !prevState.isBurgerOpen };
        });
    };

    state = {
        lang: fr,
        toggleLanguage: this.toggleLanguage,
        isBurgerOpen: false,
        toggleBurger: this.toggleBurger,
        projects: {
            toulousewifi: {
                name: "toulousewifi",
                stack: [{ name: "vue", logo: vue }, { name: "bulma", logo: bulma }],
                screenshots: [toulousewifi1, toulousewifi2, toulousewifi3, toulousewifi4, toulousewifi5, toulousewifi6],
                gif: { toulousewifi },
                websitelink: "http://wifitoulouse.fr",
                githublink: "https://github.com/HatemSat/toulouse-wifi"
            }
            //TODO Ajouter les autres projets + 
            // site witrine flowbow sans code/siteweb
            // Application react native
            // Screenshots
            // Description longue
            // Stack technoque complet
        }
    };

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                <div className={classes.Layout}>
                    <Router>

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
                                                <Route path="/resume">
                                                    <Resume />
                                                </Route>
                                                <Route path="/details/:project">
                                                    <Details />
                                                </Route>
                                            </Switch>
                                        </ScrollTop>
                                    </CSSTransition>
                                </TransitionGroup>

                            )}
                        />

                        {/* <Route path="/details">
                                <Details />
                            </Route> */}

                    </Router>

                </div>
            </LanguageContext.Provider>
        );
    }
}
