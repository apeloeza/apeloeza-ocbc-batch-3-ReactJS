import React from "react";
import "../App.css";

export default class card extends React.Component {
    render(){
        return (
            <div>
                <h3>{this.props.country}</h3>
                <p>{this.props.text}</p>
            </div>
        )        
    }
}