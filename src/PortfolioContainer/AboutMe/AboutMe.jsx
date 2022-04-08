import React from 'react'
import './about.css'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";


export default function AboutMe() {
    return (
        <div className='mainDiv' id="about" >
            <h2 className="pageHeadingA">About Me</h2>
            <div className='containerDiv'>

                <div className='aboutmeTextDiv'>
                    <p className="aboutme">
                        <p> Hii, I am Shubham Mishra, I have completed Graduatation in BCA from College Of Management Studies which is affilated by chhatrapati shahu ji maharaj university Kanpur Uttar Pradesh
and trained in Masai school with diverse set of skills ranging from HTML, CSS, JavaScript,
                        ReactJs to ExpressJs, MongoDB, NodeJs and built several projects solo as well as collaboratively.
       

                          

                        </p>

                    
                        </p>
                  

                    <div className="colzs">
                        <div className="colz-icons">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shubham-mishra-8402a21a1/"><FaLinkedin className='social-media-icon' /></a>
                            <a target="_blank" rel="noopener noreferrer" style={{marginLeft:"10px"}} href="https://github.com/78640sam"><FaGithubSquare className='social-media-icon' /></a>
                        </div>
                    </div>
                    <div className='aboutBtnDiv'>
                        {/* <button className='hireMeBtn'>Hire Me</button> */}
                        <a href=".././images/resume.pdf" download='resume.pdf' target="_blank" rel="noopener noreferrer">
                            <button className="getBtn">Get Resume</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
