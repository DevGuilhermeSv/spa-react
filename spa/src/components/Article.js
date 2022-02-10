import React, { Component } from "react";
import './Article.css'
export default class Article extends Component{
constructor(props){
    super(props);
    
}
    render(){
        
        return(
            <div className="m-1 col-4 card">
                    <img src={this.props.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.Titulo}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        )
    }
}