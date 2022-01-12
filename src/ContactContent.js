import React,{Component} from "react";
import {Button} from "react-bootstrap"; 
class ContactContent extends Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div className="ContactContent main-block" id="Contact">
                <h2 className="big-title">
                    Contact
                </h2>
                <form>
                    Name : <input aria-label/>
                    Message : <input />
                    <button variant="primary" >Submit</button>
                </form>
            </div>
        )
    }
}

export default ContactContent;