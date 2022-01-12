import React, {Component} from 'react';
import "./css/GeneralLinksStyles.css";
import { Helmet } from 'react-helmet';
class GeneralLinks extends Component{

    constructor(props){
        super(props);
        this.jumpToFacts=this.jumpToFacts.bind(this);
        this.addHomeActive=this.addHomeActive.bind(this);
        this.addAboutActive=this.addAboutActive.bind(this);
        this.addSkillsActive=this.addSkillsActive.bind(this);
        this.addFactsActive=this.addFactsActive.bind(this);
        this.addResumeActive=this.addResumeActive.bind(this);
        this.addProjectActive=this.addProjectActive.bind(this);
    }

    jumpToFacts(){  
        let elmnt = document.getElementById("Facts");
        elmnt.scrollIntoView({behavior: "smooth"});
    }

    addHomeActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        homelink.classList.add("active");

        let collection=[aboutlink,skillslink,factslink,resumelink,projectlink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
        
    }
    
    addAboutActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        aboutlink.classList.add("active");

        let collection=[homelink,skillslink,factslink,resumelink,projectlink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
    }

    addSkillsActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        skillslink.classList.add("active");

        let collection=[homelink,aboutlink,factslink,resumelink,projectlink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
    }

    addFactsActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        factslink.classList.add("active");

        let collection=[homelink,aboutlink,skillslink,resumelink,projectlink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
    }

    addResumeActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        resumelink.classList.add("active");

        let collection=[homelink,aboutlink,skillslink,factslink,projectlink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
    }

    addProjectActive(){
        let homelink=document.getElementById("homeLink");
        let aboutlink=document.getElementById("aboutLink");
        let skillslink=document.getElementById("skillsLink");
        let factslink=document.getElementById("factsLink");
        let resumelink=document.getElementById("resumeLink");
        let projectlink=document.getElementById("projectLink");

        projectlink.classList.add("active");

        let collection=[homelink,aboutlink,skillslink,factslink,resumelink];
        collection.forEach((link)=>{
            if(link.classList.contains("active")){
                link.classList.remove("active");
            }
        })
    }


    render(){


        return (
            <div className="GeneralLinks">
                
                
                <a className="home-tag first-home-tag" href="#Home" id="homeLink" onClick={this.addHomeActive} >
                    <div className="link-block">
                    {/* class="bi bi-house-fill" */}
                    
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                        </svg>
                        Home
                    </div>
                </a>
                

                <a className="home-tag" href="#About" id="aboutLink" onClick={this.addAboutActive}>
                    <div className="link-block">
                    {/* class="bi bi-person-bounding-box" */}
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z"/>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                        About
                    </div>
                </a>

                <a className="home-tag" href="#Skills" id="skillsLink" onClick={this.addSkillsActive}>
                    <div className="link-block">
                    {/* class="bi bi-bookmark-check-fill" */}
                        <svg className="link-icon bi bi-hammer" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                        </svg>
                        Skills
                    </div>
                </a>

                <a  className="home-tag" href="#Facts" id="factsLink" onClick={this.addFactsActive}>
                    
                    <div className="link-block" onClick={this.jumpToFacts}>
                    {/* class="bi bi-bookmark-check-fill" */}
                        <svg className="link-icon bi bi-lightbulb-fill" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        Facts
                    </div>
                    
                </a>
                

                <a className="home-tag" href="#Resume" id="resumeLink" onClick={this.addResumeActive}>
                    <div className="link-block">
                    {/* class="bi bi-file-earmark-medical-fill" */}
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-3 2v.634l.549-.317a.5.5 0 1 1 .5.866L7 7l.549.317a.5.5 0 1 1-.5.866L6.5 7.866V8.5a.5.5 0 0 1-1 0v-.634l-.549.317a.5.5 0 1 1-.5-.866L5 7l-.549-.317a.5.5 0 0 1 .5-.866l.549.317V5.5a.5.5 0 1 1 1 0zm-2 4.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0 2h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"/>
                        </svg>
                        Resume
                    </div>
                </a>

                <a className="home-tag" href="#Project" id="projectLink" onClick={this.addProjectActive} >
                    <div className="link-block">
                    {/* class="bi bi-bookmark-check-fill" */}
                        <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
                        </svg>
                        Project
                    </div>
                </a>

                <Helmet>
                    <script src="./ActiveClassScript.js" type="text/javascript" />
                </Helmet>

            </div>
        )
    }
}

export default GeneralLinks;