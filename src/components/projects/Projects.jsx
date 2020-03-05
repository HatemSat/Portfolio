import React from 'react'
import Card from '../card/Card'
import classes from './Projects.module.css'
import { LanguageContext } from '../../context/context'

import gifImage from '../../assets/gif/flow.gif'
import staticImage from '../../assets/gif/flowbowstatic.png'
import Aux from '../../hoc/auxilliary/Auxilliary'

const Projects = () => {
    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) =>
                (
                    <div className={classes.Projects}>
                        <Card
                            description={lang.Flowbow.Description}
                            title='My projects'
                            gifImage={gifImage}
                            staticImage={staticImage}></Card>
                        <Card
                            description={lang.Flowbow.Description}
                            title='My projects'
                            gifImage={gifImage}
                            staticImage={staticImage}></Card>
                    
                    </div>

                )
            }
        </LanguageContext.Consumer>
    )
}

export default Projects
