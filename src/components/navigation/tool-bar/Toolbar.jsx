import React, { Component } from 'react'
import classes from './Toolbar.module.css'
import { Link } from "react-router-dom";
import logo from '../../../assets/images/spiral.svg'
import BurgerToggler from '../hamburger-toggler/BurgerToggler';
import NavLinks from '../nav-links/NavLinks';

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.toolbarRef = React.createRef();
    }

    handleScroll = () => {
        if (window.scrollY === 0 && window.scrollY <= 80) {
            this.toolbarRef.current.style.borderBottom = '0px solid black'
        } else if (window.scrollY > 80) {
            this.toolbarRef.current.style.borderBottom = '1px solid black'
        }
    }
    componentDidMount = () => {
        document.addEventListener('scroll', this.handleScroll.bind(this))
    }
    componentWillUnmount = () => {
        document.removeEventListener('scroll', this.handleScroll.bind(this))
    }
    render() {

        return (

            <header ref={this.toolbarRef} className={classes.Toolbar}>
                <div className={classes.Logo}>
                    <Link to='/'>
                        <img alt="Website Logo" src={logo}></img>
                    </Link>
                </div>
                <div>
                    <BurgerToggler></BurgerToggler>
                </div>
                <nav>
                    <NavLinks></NavLinks>
                </nav>
            </header>
        )
    }

}

export default Toolbar
