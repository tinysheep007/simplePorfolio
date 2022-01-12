import React, {Component} from "react";
import {ProgressBar} from 'react-bootstrap';
import "./css/SkillsContentStyles.css"
class SkillsContent extends Component  {
    render(){
        return (
            <div className="SkillsContent main-block" id="Skills">
                <h2 className="big-title">Skill</h2>
                <p className="skill-content">
                    Familiarity are listed below.
                </p>

                <div className="progressBar">
                    <div>
                        Java
                        <div className="percent">75%</div>
                    </div>
                    <ProgressBar animated className="bar" variant="success" now={75} />
                    
                </div>

                <div className="progressBar">
                    <div>
                        JavaScript
                        <div className="percent">70%</div>
                    </div>
                    
                    <ProgressBar animated className="bar" variant="success" now={70} />
                </div>

                <div className="progressBar">
                    <div>
                        React
                        <div className="percent">50%</div>
                    </div>
                    
                    <ProgressBar animated className="bar" variant="success" now={50} />
                </div>

                <div className="progressBar">
                    <div>
                        HTML/CSS
                        <div className="percent">50%</div>
                    </div>
                    
                    <ProgressBar animated className="bar" variant="success" now={50} />
                </div>

                <div className="progressBar">
                    <div>
                        Python
                        <div className="percent">30%</div>
                    </div>
                    
                    <ProgressBar  animated className="bar" variant="success" now={30} />
                </div>

                <div className="progressBar">
                    <div>
                        C
                        <div className="percent">25%</div>
                    </div>
                    <ProgressBar animated className="bar" variant="success" now={25} />
                </div>

                
                
            </div>

        )
    }
}

export default SkillsContent;