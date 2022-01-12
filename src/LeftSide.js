import React, {Component} from 'react';
import "./css/LeftSideStyle.css" ;
import { Button } from 'react-bootstrap';
import SocialLinks from './SocialLinks';
import GeneralLinks from './GeneralLinks';
import CircleProfilePic from './left-head.jpg';
class LeftSide extends Component{
    render(){
        return(
            <div className="LeftSide" >
                
                
                <img className="CircleProfilePic" src={CircleProfilePic} />
                <h1 style={{paddingRight:"20px",color:"white"}}>Peter Zhang</h1>
                <SocialLinks />
                
                <GeneralLinks />
            </div>

        )
    }
}

export default LeftSide;