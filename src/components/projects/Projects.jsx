import React from 'react'
import Card from '../card/Card'
import classes from './Projects.module.css'

const Projects = () => {
    return (
        <div className={classes.Projects}>
            <Card title='My projects'></Card>
            <Card title='Resume'></Card>
        </div>
    )
}

export default Projects
