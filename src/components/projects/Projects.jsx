import React from 'react'
import classes from './Projects.module.css'
import { LanguageContext } from '../../context/context'
import Card from '../card/Card'

import gifImage from '../../assets/gif/flow.gif'
import staticImage from '../../assets/gif/flowbowstatic.png'

import javascript from '../../assets/images/stack/javascript.png'
import bootstrap from '../../assets/images/stack/bootstrap.png'
import reactlogo from '../../assets/images/stack/react.png'

const Projects = () => {
    return (
        <LanguageContext.Consumer>
            {({ lang, toggleLanguage }) =>
                (
                    <div className={classes.Projects}>
                        <Card stack={[javascript, bootstrap, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                        <Card stack={[javascript, bootstrap, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                        <Card stack={[javascript, bootstrap, reactlogo, reactlogo, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                        <Card stack={[javascript, bootstrap, reactlogo, reactlogo, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                        <Card stack={[javascript, bootstrap, reactlogo, reactlogo, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                        <Card stack={[javascript, bootstrap, reactlogo, reactlogo, reactlogo]} staticImage={gifImage} description="Toulouse township finder for aware citizens"></Card>
                    </div>
                )
            }
        </LanguageContext.Consumer >
    )
}

export default Projects
