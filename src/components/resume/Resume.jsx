import React from 'react'
import classes from './Resume.module.css'
import Aux from '../../hoc/auxilliary/Auxilliary'
import ResumePicture from '../../assets/images/resume.jpg'

const Resume = (props) => {
    return (
        <Aux>
            <div className={classes.ResumeContainer}>
                <img className={classes.Picture} alt="Resume" src={ResumePicture}></img>
            </div>

        </Aux>
    )
}

export default Resume
