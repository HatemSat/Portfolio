import React from "react";
import classes from "./Projects.module.css";
import { LanguageContext } from "../../context/context";
import Card from "../card/Card";

// import flowbow from "../../assets/gif/flowbow.webm";
import snake from "../../assets/gif/snake.webm";
import backoffice from "../../assets/gif/backoffice.webm";
import portfolio from "../../assets/gif/portfolio.webm";

import javascript from "../../assets/images/stack/javascript.png";
import bootstrap from "../../assets/images/stack/bootstrap.png";
import reactlogo from "../../assets/images/stack/react.png";

import socket from "../../assets/images/stack/socket.png";
import angular from "../../assets/images/stack/angular.png";
import mdb from "../../assets/images/stack/mdb.png";
import mongo from "../../assets/images/stack/mongo.png";
import node from "../../assets/images/stack/node.png";
import html from "../../assets/images/stack/html.png";
import css from "../../assets/images/stack/css.png";

const Projects = () => {
    return (
        <LanguageContext.Consumer>
            {({ lang }) => (
                <div className={classes.Projects}>
                    <Card
                        stack={[javascript, socket, node, bootstrap]}
                        gif={snake}
                        description={lang.projects.snake.description}
                        websitelink="http://snake.hatemsat.fr"
                        githublink="https://github.com/HatemSat/snakebab"></Card>
                    <Card
                        stack={[reactlogo, html, css]}
                        gif={portfolio}
                        description={lang.projects.portfolio.description}
                        websitelink="http://hatemsat.fr"
                        githublink="https://github.com/HatemSat/Portfolio"></Card>
                    <Card
                        stack={[angular, mdb, mongo]}
                        gif={backoffice}
                        description={lang.projects.backoffice.description}
                        websitelink="http://back.hatemsat.fr"
                        githublink="https://github.com/HatemSat/Companify"></Card>
                </div>
            )}
        </LanguageContext.Consumer>
    );
};

export default Projects;
