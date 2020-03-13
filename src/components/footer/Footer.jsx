import React from 'react'
import classes from './Footer.module.css'
import stackoverflow from '../../assets/images/social/stackoverflow.png'
import linkedin from '../../assets/images/social/linkedin.png'

export const Footer = () => {
    return (
        <div className={classes.Footer}>
            <p>hatem.satouri@yahoo.com</p>
            <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/users/12084088/hatemsat?tab=profile"><img src={stackoverflow} alt="" /></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hatem-satouri/"><img src={linkedin} alt="" /></a>
        </div>
    )
}
