import "./project.css"
import { FaGithubSquare, FaLink } from "react-icons/fa";

export const Project = () => {
    return (
        <>



        
            <div className="projectMain" id="project">
                <h1 className="pageHeadingP">Projects</h1>



                

                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>intern Theroy Clone</h3>
                        <p>InternTheory is an online internship portal created to bridge the gap between students seeking internships and companies looking for interns.</p>
                        <div className="links">
                        <button id="project-links" class="social-media-icon">      <a target="_blank" rel="noopener noreferrer" href="https://github.com/78640sam/intern_theory.github.io.git"><FaGithubSquare className='social-media-icon' /></a>Show Code </button> 
                        <button id="project-links" class="social-media-icon">    <a target="_blank" rel="noopener noreferrer" href="https://intern-theory-clone.vercel.app/"><FaLink className='social-media-icon' /></a>Show live </button> 
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg secProjectImg">
                        <img src=".././images/p3.png" alt="" />
                    </div>
                </div>

                <div className="projectCardDiv">
                    <div className="projectDetail">
                        <h3>Juicy Chemistry Clone</h3>
                        <p>100% organic skin care products in india certified by Ecocert, Order online now in India for your best skin care and experience the proven results.</p>
                        <div className="links">
                        <button id="project-links" class="social-media-icon">    <a target="_blank" rel="noopener noreferrer" href="https://github.com/78640sam/jc.github.io.git"><FaGithubSquare className='social-media-icon' /></a>Show Code </button> 
                        <button id="project-links" class="social-media-icon">    <a target="_blank" rel="noopener noreferrer" href="https://78640sam.github.io/jc.github.io/"><FaLink className='social-media-icon' /></a> Show live </button> 
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                {/* <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="" />
                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="" /> */}
                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/p1.png" alt="" />
                       
                    </div>
                </div>



                <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Expedia Clone</h3>
                        <p>A web application to Check out Expedia's daily travel deals & promotions.</p>
                        <div className="links">
                         <button id="project-links" class="social-media-icon">  <a target="_blank" rel="noopener noreferrer" href="https://github.com/78640sam/expedia.github.io.git"><FaGithubSquare className='social-media-icon' /> </a> Show Code </button> 
                         <button id="project-links" class="social-media-icon">   <a target="_blank" rel="noopener noreferrer" href="facebook.com"><FaLink className='social-media-icon' /></a>Show live </button> 
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />
                                <img src="" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg secProjectImg">
                        <img src=".././images/p2.png" alt="" />
                    </div>
                </div>

            


                {/* <div className="projectCardDiv secProject">
                    <div className="projectDetail">
                        <h3>Youtube clone</h3>
                        <p>Youtube is the 2nd largest search engine next to Google.
                People upload more than 100 hours of videos per minute to YouTube.
                        </p>
                        <div className="links">
                        <button id="project-links" class="social-media-icon">    <a target="_blank" rel="noopener noreferrer" href="https://github.com/78640sam/youtube.github.io.git"><FaGithubSquare className='social-media-icon' /></a>Show Code </button> 
                        <button id="project-links" class="social-media-icon">    <a target="_blank" rel="noopener noreferrer" href="facebook.com"><FaLink className='social-media-icon' /></a>Show live </button> 
                        </div>
                        <div className="langDiv">
                            <p className="techstack">Tech Stack :</p>
                            <div className="texttackDiv">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="" />
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="" />

                            </div>
                        </div>
                    </div>
                    <div className="projectImg">
                        <img src=".././images/youtube.jpg" alt="" />
                    </div>
                </div> */}
            </div>
        </>
    );
}
