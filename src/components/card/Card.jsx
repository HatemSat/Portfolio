import React from 'react'
import classes from './Card.module.css'
import github from '../../assets/images/github.svg'
import view from '../../assets/images/view.svg'
import { LanguageContext } from '../../context/context'

const Card = (props) => {

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
                    <div
                        style={{ backgroundImage: `url(${props.staticImage})` }}
                        onMouseLeave={(e) => { leaveImageToggler(e) }}
                        onMouseEnter={(e) => { enterImageToggler(e) }}
                        className={classes.Image}>
                    </div>

                    <div className={classes.Text}>
                        {/* <span className={classes.Date}>4 days ago</span> */}
                        {/* <h2>{lang.Home}</h2> */}
                        <p>{props.description}</p>
                    </div>
                    <div className={classes.Icons}>
                        <div className={classes.Icon}>
                            <img alt="Eye Icon" src={view}></img>
                        </div>
                        <div className={classes.Icon}>
                            <img alt="Github Icon" src={github}></img>
                        </div>
                    </div>
                </div>
            )}

        </LanguageContext.Consumer>

    )
}

export default Card
