import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/navigation/Toolbar/Toolbar'
import { Home } from '../../components/home/Home'
import { Switch, Route } from "react-router-dom";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/navigation/footer/Footer';
import Projects from '../../components/projects/Projects';
import eng from '../../assets/translations/eng.json';
import fr from '../../assets/translations/fr.json';

const langaugeContext = React.createContext(eng);

export default class Layout extends Component {

    state = {
        context: fr
    }

    render() {
        return (
            <langaugeContext.Provider>
                <div className={classes.Layout} >
                    <Toolbar context={this.state.context}> </Toolbar>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </div>
            </langaugeContext.Provider>

        )
    }
}