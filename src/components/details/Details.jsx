import React from 'react'
import classes from './Details.module.css'
import { LanguageContext } from '../../context/context'
import { useParams } from 'react-router-dom'

const Details = (props) => {
    let { project } = useParams();
    console.log(props.test);
    return (
        <LanguageContext.Consumer>
            {({ lang, projects }) => {
                return (
                    //TODO Page de détails

                    <div className={classes.Details}>
                        <div className={classes.LeftContainer}>
                            {/* 
                            {projects[project].screenshots.map((screenshot, index) => {
                                return (
                                    <div className={[classes.ImageContainer, `ImageContainer-${index}`].join(' ')} key={index}>
                                        <img src={screenshot} alt="" />
                                    </div>
                                )
                            })} */}
                            <div className={[classes.ImageContainer, classes.ImageContainer1].join(' ')}>
                                <img src={projects[project].screenshots[0]} alt="" />
                            </div>
                            <div className={[classes.ImageContainer, classes.ImageContainer2].join(' ')}>
                                <img src={projects[project].screenshots[1]} alt="" />
                            </div>
                            <div className={[classes.ImageContainer, classes.ImageContainer3].join(' ')}>
                                <img src={projects[project].screenshots[2]} alt="" />
                            </div>
                             
                            <div className={[classes.ImageContainer, classes.ImageContainer4].join(' ')}>
                                <img src={projects[project].screenshots[3]} alt="" />
                            </div>
                            <div className={[classes.ImageContainer, classes.ImageContainer5].join(' ')}>
                                <img src={projects[project].screenshots[4]} alt="" />
                            </div>
                            <div className={[classes.ImageContainer, classes.ImageContainer6].join(' ')}>
                                <img src={projects[project].screenshots[5]} alt="" />
                            </div>



                        </div>

                        <div className={classes.RightContainer}>
                            <div>Details de {project}</div>
                            <div>{projects[project].websitelink}</div>
                            <div>{lang.projects[project].description}</div>
                            {projects[project].stack.map((tech, index) => {
                                return (
                                    <div key={index}>
                                        <div>{tech.name}</div>
                                        <img key={index} src={tech.logo} alt=""></img>
                                    </div>
                                )
                            })}

                        </div>




                    </div>
                )
            }}
        </LanguageContext.Consumer>
    )
}

export default Details
