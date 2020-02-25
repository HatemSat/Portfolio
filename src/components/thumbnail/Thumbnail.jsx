import React from 'react'
import classes from './Thumbnail.module.css'
import { Link } from 'react-router-dom'
import resume from '../../assets/images/resume.jpg'
import javascript from '../../assets/images/javascript.jpg'

const Thumbnail = (props) => {
    return (
        <div className={classes.Thumbnail}>
            <div className={classes.Image}>
                <Link to='/'>
                    <img src={resume}></img>
                </Link>
            </div>
            <div className={classes.Description}>
                <p>{props.title}</p>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Thumbnail
