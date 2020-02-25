import React from 'react'
import classes from './Home.module.css'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'
import resume from '../../assets/images/resume.jpg'
import javascript from '../../assets/images/javascript.jpg'
import Thumbnail from '../thumbnail/Thumbnail'

export const Home = (props) => {
    return (
        <div className={classes.Home}>
            <div>
                <Thumbnail title='My projects'></Thumbnail>
                <Thumbnail title='Resume'></Thumbnail>
            </div>
            <div>
                <img src={linkedin}></img>
                <img src={github}></img>
            </div>
        </div>
    )
}
