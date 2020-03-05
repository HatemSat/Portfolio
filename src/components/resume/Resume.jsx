import React from 'react'
import classes from './Resume.module.css'
import Aux from '../../hoc/auxilliary/Auxilliary'
import ResumePicture from '../../assets/images/Resume.jpg'

const Resume = (props) => {
    return (
        <Aux>
            <div className={classes.ResumeContainer}>
                <img className={classes.Picture} src={ResumePicture}></img>
            </div>

        </Aux>
    )
}

export default Resume
