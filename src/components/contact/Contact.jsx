import React, { Component } from 'react'
import classes from './Contact.module.css'
import { LanguageContext } from '../../context/context'
import axios from 'axios'

class Contact extends Component {

    state = {
        form: {
            name: {
                value: ''
            },
            email: {
                value: ''
            },
            description: {
                value: ''
            }
        }
    }
    formHandler = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log(e.target[2].value);
        // if (!e.target[0].value) {
        //     console.log('vide');
        // } else {
        //     console.log('rempli');

        // }
        console.log(this.state);


    }

    changeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({})
    }
    render() {

        return (
            <LanguageContext.Consumer>
                {({ lang }) => {
                    return (
                        <div className={classes.Contact}>
                            <form onSubmit={this.formHandler}>
                                <h3>{lang.contact.call}</h3>
                                <div>
                                    <input type="text" placeholder="Email" name="email" onChange={this.changeHandler} />
                                </div>
                                <div>
                                    <input type="text" placeholder={lang.contact.name} name="name" onChange={this.changeHandler} />

                                </div>
                                <div>
                                    <textarea rows="6" placeholder="Message" name="description" onChange={this.changeHandler}></textarea>
                                </div>
                                <div className={classes.Button}>
                                    <button disabled={false} type="submit" >{lang.contact.send}</button>
                                </div>
                            </form>
                        </div>
                    )
                }}
            </LanguageContext.Consumer >
        )
    }

}

export default Contact
