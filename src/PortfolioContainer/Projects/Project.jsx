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
                        <p>This is a team project where we worked on cloning the Intern Theory website. This website is helful in solving the internship problem between both companies and students by connecting them in a effective manner. We have built this using HTML, CSS, JavaScript and Express JS.</p>
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
                        <p>100% organic skin care products in india certified by Ecocert, Order online now in India for your best skin care and experience the proven results. Juicy Chemistry was born of Pritesh and Megha Asher’s relentless ability to question everything they knew about the world of beauty and personal care. </p>
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
                        <p>A web application to Check out Expedia's daily travel deals & promotions. A web application to Check out Expedia's daily travel deals & promotions. Expedia is one of the world's leading full-service online travel brands helping travelers easily plan and book their whole trip with the widest selection of vacation packages, flights, hotels, vacation rentals, rental cars, cruises, activities, attractions, and services.</p>
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

            


              
            </div>
        </>
    );
}
