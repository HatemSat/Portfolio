import React from 'react'
import classes from './Details.module.css'
import { LanguageContext } from '../../context/context'
import { useParams } from 'react-router-dom'
import screenblack from '../../assets/images/stack/screen-black.png'
import codeblack from '../../assets/images/stack/code-black.png'

const Details = (props) => {
    let { project } = useParams();
    console.log(props.test);
    return (
        <LanguageContext.Consumer>
            {({ lang, projects }) => {
                return (
                    //TODO Page de détails

                    <div className={classes.Container}>
                        <h1 className={classes.Title}>{projects[project].name.toUpperCase()}</h1>
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
                                {/* <div>Details de {project}</div> */}
                                <p className={classes.Description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, velit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, velit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, velit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, velit.</p>
                                <br />
                                <p>Stack technique :</p>
                                <br />
                                {/* <div>{lang.projects[project].description}</div> */}
                                <div className={classes.StackContainer}>
                                    {projects[project].stack.map((tech, index) => {
                                        return (
                                            <div key={index}>
                                                <img key={index} src={tech.logo} alt=""></img>
                                                <p>{tech.name}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <br />
                                <br />
                                <br />

                                <a className={classes.Button} href={projects[project].websitelink} target="_blank" rel="noopener noreferrer">
                                    <img src={screenblack} alt="" />
                                    <p>Voir le site web</p>
                                </a>

                                <a className={classes.Button} href={projects[project].githublink} target="_blank" rel="noopener noreferrer">
                                    <img src={codeblack} alt="" />
                                    <p>Voir le code source</p>
                                </a>



                                <br />
                                <br />
                                <br />
                                <div></div>

                            </div>




                        </div>
                    </div>

                )
            }}
        </LanguageContext.Consumer>
    )
}

export default Details
