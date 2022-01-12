import React, {Component} from "react";
import "./css/ResumeContentStyles.css";
import slider from "./slider.png";
import doubleSlider from "./doubleSlider.png";
class ResumeContent extends Component {
    render(){
        return (
            <div className="ResumeContent main-block" id="Resume">
                <h2 className="big-title">
                    Resume
                   
                </h2>
                <p className="resume-head">Resume can also be <a  href="https://github.com/tinysheep007/Resume/blob/main/Zihe%20Zhang%20Resume.pdf" target="_blank" >Downloaded</a>.</p>
                
                <div className="resume-component">
                    <div className="resume-big-title">
                        Education
                    </div>
                    <img  className="slider-education" src={slider} />

                    <div className="resume-sec-til">
                        Bachelor of Computer Science
                    </div>
                    <div className="resume-time">
                        September 2020 - June 2024
                    </div>
                    <div className="resume-sub">
                        Rutgers - New Brunswick
                    </div>
                    <div className="resume-info">
                    ●  GPA: 3.9 / 4.0<br></br>
                    ●  Major GPA: 4.0 / 4.0<br></br>
                    ●  Related Courses: Data Structures, Discrete Mathematics, Linear Algebra
                    </div>

                    <div className="resume-big-title resume-club">
                        Club & Other Activity
                    </div>
                    <img  className="slider-club" src={slider} />
                    <div className="resume-sec-til">
                        Mentor Assitant
                    </div>
                    <div className="resume-time">
                        September 2021 - Current
                    </div>
                    <div className="resume-sub">
                        New Brunswick, NJ
                    </div>
                    <div className="resume-info">
                    ● Assisting in lectures by promoting useful coding learning sources<br></br>
                    ● interviewing potential Candidates and setting up meetings <br></br>
                    ● Coordinating workshop events 
                    </div>
                </div>
                
                <div className="resume-component">
                    <div className="resume-big-title">
                        Experience
                    </div>
                    <img  className="slider-experience" src={doubleSlider} />
                    <div className="resume-sec-til">
                        Packing Crew Memeber
                    </div>
                    <div className="resume-time">
                        May 2021 - September 2021
                    </div>
                    <div className="resume-sub">
                        Dumont, NJ
                    </div>
                    <div className="resume-info">
                    ● Updating quality of in-stock fish by actively editing the selling component within the Shopify market website.<br></br>
                    ● Tracking and ensuring each order is completed by examining excel.
                    </div>
                    
                    <div className="resume-sec-til resume-wendys">
                        Team Crew Memeber
                    </div>
                    <div className="resume-time">
                        May 2021 - September 2021
                    </div>
                    <div className="resume-sub">
                        Dumont, NJ
                    </div>
                    <div className="resume-info">
                        ● Managing frying sections while restocking other necessary products <br></br>
                        ● Packing and presenting organized food packages to customers<br></br>
                        ● Cleaning and maintaining a healthy working environment 
                    </div>
                    

                </div>

                
                
            </div>
        )
    }
}

export default ResumeContent;