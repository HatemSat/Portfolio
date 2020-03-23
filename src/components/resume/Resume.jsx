import React from 'react'
import classes from './Resume.module.css'
import Aux from '../../hoc/auxilliary/Auxilliary'
import { LanguageContext } from '../../context/context'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Resume = (props) => {

    let history = useHistory();

    const goBackHandler = () => {
        history.goBack()
    }

    const downloadHandler = async (e) => {
        e.preventDefault()
        axios.get("https://europe-west1-portfoliohatemsat.cloudfunctions.net/s",
            {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/pdf'
                }
            })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'CV_Hatem_Satouri.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch((error) => console.log(error));

    }

    return (
        <Aux>
            <LanguageContext.Consumer>
                {({ lang }) => {
                    const l = lang.resume.left
                    const r = lang.resume.right
                    return (
                        <div className={classes.MainContainer}>
                            <button onClick={goBackHandler} className={classes.BackButton}>{lang.resume.button}</button>

                            <div className={classes.ResumeContainer}>
                                {/* <img className={classes.Picture} alt="Resume" src={ResumePicture}></img> */}
                                {/* <h1>Resume</h1> */}

                                <div className={classes.LeftContainer}>
                                    <div>
                                        <h3>{l.stack.title}</h3>
                                        <p>Node.js</p>
                                        <p>React</p>
                                        <p>Angular</p>
                                        <p>C#, ASP.Net MVC, WPF</p>
                                        <p>Sass</p>
                                        <p>Firebase</p>
                                        <p>Git</p>
                                    </div>
                                    <div>
                                        <h3>{l.softwares.title}</h3>
                                        <p>Visual studio</p>
                                        <p>Visual studio code</p>
                                        <p>Photoshop / Illustrator</p>
                                        <p>Figma</p>
                                        <p>{l.softwares.office}</p>
                                    </div>
                                    <div>
                                        <h3>{l.languages.title}</h3>
                                        <p>{l.languages.french}</p>
                                        <p>{l.languages.english}</p>
                                        <p>{l.languages.arabic}</p>
                                    </div>
                                    <div>
                                        <h3>{l.hobbies.title}</h3>
                                        <p>{l.hobbies.esport}</p>
                                        <p>{l.hobbies.music}</p>
                                        <p>{l.hobbies.circus}</p>
                                        <p>{l.hobbies.nutrition}</p>
                                        <p>{l.hobbies.travel}</p>
                                    </div>

                                </div>
                                <div className={classes.Line}></div>

                                <div className={classes.RightContainer}>
                                    <div>
                                        <h3>{r.experiences.title}</h3>
                                        <div>
                                            <h4>{r.experiences.freelance.title}</h4>
                                            <h4>{r.experiences.freelance.date}</h4>
                                            <ul>
                                                <li><p>{r.experiences.freelance.description[0]}</p></li>
                                                <li><p>{r.experiences.freelance.description[1]}</p></li>
                                                <li><p>{r.experiences.freelance.description[2]}</p></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>{r.experiences.internship.title}</h4>
                                            <h4>{r.experiences.internship.subtitle}</h4>
                                            <h4>{r.experiences.internship.date}</h4>
                                            <ul>
                                                <li><p>{r.experiences.internship.description[0]}</p></li>
                                                <li><p>{r.experiences.internship.description[1]}</p></li>
                                                <li><p>{r.experiences.internship.description[2]}</p></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>{r.experiences.kerozen.title}</h4>
                                            <h4>{r.experiences.kerozen.subtitle}</h4>
                                            <h4>{r.experiences.kerozen.date}</h4>
                                            <ul>
                                                <li><p>{r.experiences.kerozen.description[0]}</p></li>
                                                <li><p>{r.experiences.kerozen.description[1]}</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <h3>{r.education.title}</h3>
                                        <div>
                                            <h4>{r.education.doranco.title}</h4>
                                            <h4>{r.education.doranco.subtitle}</h4>
                                            <h4>{r.education.doranco.date}</h4>
                                            <ul>
                                                <li><p>{r.education.doranco.description[0]}</p></li>
                                                <li><p>{r.education.doranco.description[1]}</p></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>{r.education.gtm.title}</h4>
                                            <h4>{r.education.gtm.subtitle}</h4>
                                            <h4>{r.education.gtm.date}</h4>
                                            <ul>
                                                <li><p>{r.education.gtm.description[0]}</p></li>
                                                <li><p>{r.education.gtm.description[1]}</p></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4>{r.education.usj.title}</h4>
                                            <h4>{r.education.usj.subtitle}</h4>
                                            <h4>{r.education.usj.date}</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={classes.ButtonContainer}>
                                <button onClick={goBackHandler} className={classes.BackButton}>{lang.resume.button}</button>
                                <button onClick={downloadHandler} className={classes.DownloadButton}>{lang.resume.download}</button>

                            </div>
                        </div>

                    )
                }}

            </LanguageContext.Consumer>
        </Aux>
    )
}

export default Resume
