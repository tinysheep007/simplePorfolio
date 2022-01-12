import React, {Component} from 'react';
import "./css/ChangeWordsStyles.css";
class ChangeWords extends Component{
    
    constructor(props){
        super(props);
        this.state={
            position:0,
            text:"student",
            seconds: 0
        };
        this.change=this.change.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
    }
    
    
    change() {
        const choice=["|","s|","st","stu|","stud","stude|","studen","student|","studen","stude|","stud","stu|","st|","s","|","l","le","lea|","lear|","learn","learne","learner|","learne","learn|","lear","lea|","le|","l","","e|","ex","exp|","expe","exper","experi|","experim","experime|","experimen","experiment|","experimenta","experimental|","experimentali|","experimentalis","experimentalist|","experimentalis","experimentali|","experimental","experimenta|","experiment","experimen|","experime","experim|","experi","exper","expe|","exp","ex|","e"];
        let current = this.state.position;
        if(this.state.position + 1 < choice.length ){
            current ++;
        }else{
            current = 0;
        }
        this.setState(state => ({
            position:current,
            seconds: state.seconds + 1,
            text: choice[this.state.position]
        }));
    }

    componentDidMount() {
        if(this.state.text=="student|"){
            this.interval = setInterval(() => this.change(), 1000);
        }else{
            this.interval = setInterval(() => this.change(), 375);
        }
        
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        let pre=this.props.original;
        return (
            <div className="change-text">
                <div>
                    
                    {pre}
                    
                    <div className="only-change">
                        {this.state.text}
                    </div>
                </div>
            </div>
        )
    }

}

export default ChangeWords;