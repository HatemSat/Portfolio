import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
const Footer = props => {
    return (
        <footer className={classes.Footer}>
            {/* <Link>link1</Link> */}
            <p>&copy; 2020 Hatem Satouri</p>
            {/* <Link>link2</Link> */}
        </footer>
    )
}


export default Footer
