import React, {Component} from 'react';
import "./css/RightSideStyle.css";
import switches from "./switch.png";
import aiden from './adien.JPG';
import AboutContent from './AboutContent';
import SkillsContent from './SkillsContent';
import ResumeContent from './ResumeContent';
import ContactContent from './ContactContent';
import ChangeWords from './ChangeWords';
import FactsContent from './FactsContent';
import ProjectContent from "./ProjectContent";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import BackToTop from './BackToTop';
class RightSide extends Component{
    render(){
        return (
            <div className="RightSide" >
                
                
                <div className="black" id="Home">
                    
                    <div className='float-text'>
                        <p className="Name">
                            Peter Zhang
                        </p>
                        <ChangeWords original="I am a "></ChangeWords>

                        <div className="profile-right-replace">
                            <div className="profile-titles">
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

                <BackToTop />

                <Fade right>
                    <AboutContent />
                    
                </Fade>

                <Zoom>
                    <SkillsContent />
                </Zoom>
                
                <Roll right>
                    <FactsContent />
                </Roll>
                
                <Zoom >
                    <ProjectContent />
                </Zoom>

                <ResumeContent />
                
                
                
                
                
                
            </div>
        )
    }
}

export default RightSide;