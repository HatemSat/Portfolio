import React, { Component } from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/navigation/Toolbar/Toolbar'
import { Home } from '../../components/home/Home'
import {
    BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/navigation/footer/Footer';
import Projects from '../../components/projects/Projects';

export default class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout} >
                <Toolbar> </Toolbar>
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
        )
    }
}