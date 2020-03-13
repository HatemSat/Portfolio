import React from 'react'
import classes from './Contact.module.css'
import { LanguageContext } from '../../context/context'

const Contact = (props) => {

    const formHandler = (e) => {
        e.preventDefault()
    }

    return (
        <LanguageContext.Consumer>
            {({ lang }) => {
                return (
                    <div className={classes.Contact}>
                        <form action="">
                            <h3>{lang.contact.call}</h3>
                            <div>
                                {/* <label htmlFor="">Email</label> */}
                                <input type="text" placeholder="Email" name="" id="" />
                            </div>
                            <div>
                                {/* <label htmlFor="">Name</label> */}
                                <input type="text" placeholder={lang.contact.name} name="" id="" />

                            </div>
                            <div>
                                {/* <label htmlFor="">Message</label> */}
                                <textarea rows="6" placeholder="Message" ></textarea>
                            </div>
                            <div className={classes.Button}>
                                <button onClick={formHandler}>{lang.contact.send}</button>
                            </div>
                        </form>
                    </div>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default Contact
