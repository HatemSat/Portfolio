import React from 'react'
import classes from './About.module.css'
import { LanguageContext } from '../../context/context'

const About = (props) => {
    return (
        <LanguageContext.Consumer>
            {({ lang }) => {
                return (
                    <div className={classes.About}>

                        <div className={classes.Title}><h2>{lang.about.title}</h2></div>
                        <div className={classes.Description}>
                            <p>{lang.about.description}</p>
                        </div>
                        <div className={classes.Stack}>
                            <div>
                                <h3>{lang.about.stack.tools}</h3>
                                {/* <br/> */}
                                <p>Git</p>
                                <p>Github</p>
                                <p>Figma</p>
                                <p>Visual Studio</p>
                                <p>Visual Studio Code</p>
                            </div>
                            <div>
                                <h3>{lang.about.stack.frameworks}</h3>
                                {/* <br/> */}
                                <p>React</p>
                                <p>Angular 2+</p>
                                <p>Bootstrap</p>
                                <p>jQuery</p>
                                <p>Bulma</p>
                                <p>ASP.NET MVC</p>
                            </div>
                            <div>
                                <h3>{lang.about.stack.languages}</h3>
                                {/* <br/> */}
                                <p>JavaScript</p>
                                <p>SASS</p>
                                <p>LESS</p>
                                <p>SQL</p>
                                <p>C#</p>
                            </div>
                            <div>
                                <h3>{lang.about.stack.cloud}</h3>
                                {/* <br/> */}
                                <p>Nginx</p>
                                <p>Debian</p>
                                <p>Firebase</p>
                                <p>Google Cloud Functions</p>
                                <p>Heroku</p>
                            </div>
                   

                        </div>
                    </div>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default About
