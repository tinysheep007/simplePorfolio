import React, {Component} from "react";
import "./css/ProjectContentStyles.css";
import pallete from "./color.JPG";
import weather from "./weather.JPG";
import wallet from "./stock.JPG";
import ai from "./ai.JPG";
class ProjectContent extends Component {
    constructor(props){
        super(props);
        this.state={
            workShown:true
        }
        this.showOrHide=this.showOrHide.bind(this);
    }

    showOrHide(){
        if(this.state.workShown==false){
            this.setState({workShown:true});
        }else if(this.state.workShown==true){
            this.setState({workShown:false});
        }
    }

    render(){
        let workInProgressPorject;
        if(this.state.workShown==true){
            workInProgressPorject=(
                <div>
                    <div className="project-block">
                    <a href="https://github.com/tinysheep007/TinyStockSim/tree/master" target="_blank" >
                        <img src={wallet} className=" project-img"></img>
                    </a>
                    
                        <div className="project-text">
                            <p className="Project-Name">Stock Simulators</p>
                            <p className="Project-Description">
                                Allows User to trade paper money in live stock informations. Trading history can also be Reviewed. A good practice before diving into real stocks.
                            </p>
                        </div>
                        
                    </div>
                    
                    <div className="project-block">
                    <a href="https://github.com/tinysheep007/aiHackRU2020/tree/main/.github/workflows" target="_blank" >
                        <img src={ai} className=" project-img"></img>
                    </a>
                        <div className="project-text">
                            <p className="Project-Name">AI</p>
                            <p className="Project-Description">
                                A useful AI that helps you to set alarms, plays games, or help you google stuff. It can even learn the answer for a unanswered questions.
                            </p>
                        </div>
                        
                    </div>

                </div>

            )
        }else{
            workInProgressPorject="";
        }
        
        let workInProgressButton;
        if(this.state.workShown==true){
            workInProgressButton = (
                <button className="work-in-progress" onClick={this.showOrHide}>Hide Work in Progress ▲</button>
            );
        }else{
            workInProgressButton = (
                <button className="work-in-progress" onClick={this.showOrHide}>Show Work in Progress ▼</button>
            )
        }
        return (
            <div className="ProjectContent main-block" id="Project">
                <h2 className="big-title">
                        Project
                </h2>
                
                <div className="project-inner">
                <p>
                    
                    {workInProgressButton}
                </p>
                

                <div className="project-block">
                    <a href="https://tinysheep007.github.io/Palette/"  target="_blank">
                        <img src={pallete} className="palette project-img"></img>
    
                    </a>
                    
                    <div className="project-text">
                        <p className="Project-Name">Color Palette</p>
                        <p className="Project-Description">
                            Choose Your Faviorite sets of color and use them as in rgb styles anywhere. You can edit your creative palette.
                        </p>
                    </div>
                    
                </div>

                <div className="project-block">
                        <a href="https://github.com/tinysheep007/weather-app-testing/tree/master/public" target="_blank" >
                            <img src={weather} className="project-img"></img>
                        </a>
                        <div className="project-text">
                            <p className="Project-Name">Weather</p>
                            <p className="Project-Description">
                                Accurate weather prediction based on a given location. Build based on Combination of location and weather APIs.
                            </p>
                        </div>
                        
                </div>
                


                {workInProgressPorject}

                

                </div>
            </div>
        )
    }
}

export default ProjectContent;