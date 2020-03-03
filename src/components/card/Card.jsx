import React from 'react'
import classes from './Card.module.css'
// import { Link } from 'react-router-dom'
// import resume from '../../assets/images/resume.jpg'
// import javascript from '../../assets/images/javascript.jpg'
import github from '../../assets/images/github.svg'
import view from '../../assets/images/view.svg'
import { LanguageContext } from '../../components/context/context'

const Card = (props) => {

    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) => (
                <div className={classes.Card}>
                    <div className={classes.Image}>
                        {/* <Link to='/'>
                    <img src={resume}></img>
                </Link> */}
                    </div>
                    <div className={classes.Text}>
                        <span className={classes.Date}>4 days ago</span>
                        <h2>{lang.Home}</h2>
                        {/* <h2>aez</h2> */}
                        <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
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
