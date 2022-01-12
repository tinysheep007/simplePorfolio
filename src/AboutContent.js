import React, {Component} from 'react';
import "./css/AboutContentStyles.css";
import adien from "./head-profile.png";
class AboutContent extends Component {
    render(){
        return (
            <div className="AboutContent main-block" id="About">
                <h2 className="big-title">
                About
                </h2>
                <p className="content-About">
                    I am currently a student pursuing computer science degree in Rutgers - New Brunswick.
                    I wish my experience in front-end and back-end development could help me become a full stack developer. 
                </p>
                <div className="profile-right-content"> 
                    <img className="about-profile" src={adien}></img>
                    <div className="profile-right">
                        <div className="profile-title">
                            Full Stack Developer & Data Analyst
                        </div>
                        <div className="basic-info">
                            <div className="bullet-point">
                            ➤ Birthday: 28 July 2002
                            </div>
                            <div className="bullet-point">
                            ➤ Phone: 201-800-2590
                            </div>
                            <div className="bullet-point">
                            ➤ Location : NJ, USA
                            </div>
                            <div className="bullet-point">
                            ➤ Age: 20
                            </div>
                            <div className="bullet-point">
                            ➤ Degree: Pursuing Bachelor's
                            </div>
                            <div className="bullet-point">
                            ➤ Email: pzxiaomie@gmail.com
                            </div>
                            
                    
                        
                        </div>
                    </div>
                    
                </div>


            </div>
        )
    }
}

export default AboutContent;