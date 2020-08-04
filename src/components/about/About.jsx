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
                                <p>Vue</p>
                                <p>React</p>
                                <p>Angular</p>
                                <p>Bulma</p>
                                <p>jQuery</p>
                                <p>Bootstrap</p>
                                <p>ASP.NET MVC</p>
                            </div>
                            <div>
                                <h3>{lang.about.stack.languages}</h3>
                                {/* <br/> */}
                                <p>C#</p>
                                <p>SQL</p>
                                <p>SASS</p>
                                <p>LESS</p>
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <h3>{lang.about.stack.cloud}</h3>
                                {/* <br/> */}
                                <p>Nginx</p>
                                <p>Debian</p>
                                <p>Heroku</p>
                                <p>Firebase</p>
                                <p>Google Cloud Functions</p>
                            </div>
                   

                        </div>
                    </div>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default About
