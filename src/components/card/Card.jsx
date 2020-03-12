import React from 'react'
import classes from './Card.module.css'
import github from '../../assets/images/github.svg'
import view from '../../assets/images/view.svg'
import { LanguageContext } from '../../context/context'
import toolbar from '../../assets/images/toolbar.png'

const Card1 = (props) => {

    const enterImageToggler = (e) => {
        e.target.style.backgroundImage = `url(${props.gifImage})`
    }
    const leaveImageToggler = (e) => {
        e.target.style.backgroundImage = `url(${props.staticImage})`
    }
    
    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (

                <div className={classes.Card}>
                    <div className={classes.ToolbarImage}>
                        <img src={toolbar}></img>
                    </div>

                    <div className={classes.Image}>
                        <img src={props.staticImage}></img>
                    </div>

                    <div className={classes.Stack}>
                        {props.stack.map((st, index) => {
                            return <img key={index} src={st}></img>
                        })}
                    </div>
                    <div className={classes.Description}>
                        <p>{props.description}</p>
                    </div>


                </div>
            )}

        </LanguageContext.Consumer>

    )
}

export default Card1