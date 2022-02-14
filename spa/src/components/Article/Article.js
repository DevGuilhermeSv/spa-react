import React, { Component } from "react";
import './Article.css'
export default class Article extends Component{
constructor(props){
    super(props);
    
}
    render(){
        
        return(
            <div className="m-1 col-sm-12 col-md-4 card">
                    <img src={this.props.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.Titulo}</h5>
                        <a href={this.props.noticia} target='_blank' className="btn btn-primary">Ver Materia</a>
                    </div>
            </div>
        )
    }
}