import React from 'react'
import classes from './Card.module.css'
import { LanguageContext } from '../../context/context'
import toolbar from '../../assets/images/toolbar.png'
import code from '../../assets/images/stack/code.png'
import screen from '../../assets/images/stack/screen.png'

const Card1 = (props) => {

    const enterCardHandler = (e) => {
        // e.target.style.backgroundImage = `url(${props.gifImage})`

    }
    const leaveCardHandler = (e) => {
        // e.target.style.backgroundImage = `url(${props.staticImage})`
    }

    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (

                <div onMouseEnter={enterCardHandler} onMouseLeave={leaveCardHandler} className={classes.Card}>
                    <div className={classes.ToolbarImage}>
                        <img src={toolbar} alt=""></img>
                    </div>

                    <div className={classes.Image}>
                        <img src={props.staticImage} alt=""></img>
                    </div>

                    <div className={classes.Stack}>
                        {props.stack.map((st, index) => {
                            return <img key={index} src={st} alt=""></img>
                        })}
                    </div>
                    <div className={classes.Description}>
                        <p>{props.description}</p>
                    </div>

                    <div className={classes.Backdrop}>
                        {/* <div className={classes.Links}>
                            <a href=""><img src={screen} alt="Computer Screen Scon" /></a>
                            <a href=""><img src={code} alt="Code Icon" /></a>
                        </div>
                        <div className={classes.Subtitles}>
                            <p>{lang.card.website}</p>
                            <p>{lang.card.code}</p>
                        </div>
                    </div> */}
                        <div className={classes.Website}>
                            <a href={props.websitelink}>
                                <img src={screen} alt="Computer Screen Scon" />
                                <p>{lang.projects.card.website}</p>
                            </a>
                        </div>
                        <div className={classes.Code}>
                            <a href={props.githublink}>
                                <img src={code} alt="Code Icon" />
                                <p>{lang.projects.card.code}</p>
                            </a>
                        </div>
                    </div>


                </div>
            )}

        </LanguageContext.Consumer>

    )
}

export default Card1