import React from "react";
import classes from "./Card.module.css";
import { LanguageContext } from "../../context/context";
import toolbar from "../../assets/images/toolbar.png";
import code from "../../assets/images/stack/code.png";
import codeblack from "../../assets/images/stack/code-black.png";
import screen from "../../assets/images/stack/screen.png";
import screenblack from "../../assets/images/stack/screen-black.png";
import details from "../../assets/images/stack/details.png";
import detailsblack from "../../assets/images/stack/details-black.png";
import { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom'
import Details from '../details/Details'

class Card extends Component {

    constructor(props) {
        super(props);
        this.backdropRef = React.createRef();
    }

    enterCardHandler = e => {
        // if (window.innerWidth < 800) {
        //     this.backdropRef.current.classList.add(classes.NoHover)
        // }
    };

    leaveCardHandler = e => { };

    render() {
        return (
            <LanguageContext.Consumer>
                {({ lang }) => (
                    <div className={classes.Card}>
                        <div className={classes.ToolbarImage}>
                            <img src={toolbar} alt=""></img>
                        </div>

                        <div className={classes.Image}>
                            <video loop autoPlay playsInline muted>
                                <source
                                    src={this.props.gif}
                                    type="video/webm"
                                />
                            </video>
                        </div>

                        <div className={classes.Stack}>
                            {this.props.stack.map((st, index) => {
                                return <img key={index} src={st} alt=""></img>;
                            })}
                        </div>
                        <div className={classes.Description}>
                            <p>{this.props.description}</p>
                        </div>

                        <div
                            className={classes.Backdrop}
                            ref={this.backdropRef}
                            onMouseLeave={this.leaveCardHandler}
                            onMouseEnter={this.enterCardHandler}>

                            <div className={classes.Row}>
                                <div className={classes.Website}>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={this.props.websitelink}>
                                        <img
                                            src={screen}
                                            alt="Computer Screen Icon"
                                        />
                                        <p>{lang.projects.card.website}</p>
                                    </a>
                                </div>

                                <div className={classes.Code}>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={this.props.githublink}>
                                        <img src={code} alt="Code Icon" />
                                        <p>{lang.projects.card.code}</p>
                                    </a>
                                </div>
                            </div>

                            <div className={classes.Row}>
                                <div className={classes.Details}>
                                    <Link test={this.props.githublink} to={`/details/${this.props.name}`}>
                                        <img src={details} alt="Details Icon" />
                                        <p>{lang.projects.card.details}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className={classes.MobileIcons}>
                            <div className={classes.Row}>

                                <div className={classes.Website}>
                                    <a href={this.props.websitelink}>
                                        <img
                                            src={screenblack}
                                            alt="Computer Screen Icon"
                                        />
                                        <p>{lang.projects.card.website}</p>
                                    </a>
                                </div>

                                <div className={classes.Code}>
                                    <a href={this.props.githublink}>
                                        <img src={codeblack} alt="Code Icon" />
                                        <p>{lang.projects.card.code}</p>
                                    </a>
                                </div>
                            </div>
                            <div className={classes.Row}>
                                <div className={classes.Details}>
                                    <a href={this.props.githublink}>
                                        <img src={detailsblack} alt="Code Icon" />
                                        <p>{lang.projects.card.details}</p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    }
}

export default Card;

