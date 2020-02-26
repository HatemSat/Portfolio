import React from 'react'
import classes from './Home.module.css'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import resume from '../../assets/images/resume.jpg'
import javascript from '../../assets/images/javascript.jpg'
import Card from '../card/Card'

export const Home = (props) => {
    return (
        <div className={classes.Home}>
            <div>
                <Card title='My projects'></Card>
                <Card title='Resume'></Card>
            </div>
            {/* <div>
                <img src={linkedin}></img>
                <img src={github}></img>
            </div> */}
        </div>
    )
}
