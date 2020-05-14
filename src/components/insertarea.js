import React, { Component } from 'react';
import ShowNotes from './showNotes';

class InsertArea extends Component {
    constructor(){
        super();
        this.state={
            title:[],
            content:[]
        };   
    }
    handleSubmit=(event)=>{
       event.preventDefault()
    }
    handleInputChange=(event)=>{
        event.preventDefault();
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }
    render(){ 
    return(
        <div className="container-fluid">
            <div className="row mb-2">
                {/* <div className="col-"></div> */}
                <div className="col-5"> 
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Your Title" value={this.state.title} type="text" name="title" onChange={this.handleInputChange}>
                    </input>
                </form>
                </div>
            {/* <div className="col-4"></div> */}
            <div className="btn-toolbar col-7">
                <div className="btn-group">
                    <button className="btn btn-sm"><strong>B</strong></button>
                    <button className="btn btn-sm"><strong>I</strong></button>
                    <button className="btn btn-sm"><strong>U</strong></button>
                </div>
            </div>
            </div>

            <div className="row">
                <div className="col-1">
                </div>
                
                
                    </div>
            <div className="row">
                <div className="col-1"></div>
                <form onSubmit={this.handleSubmit}>
                <textarea value={this.state.content} onChange={this.handleInputChange} name="content" placeholder="Your notes are safe here!" cols="100" rows="5"></textarea>
                </form>
            </div>
            <br></br>
            <div className="row">
                <div className="col-9"></div>
                <div>
                <button className="btn btn-success">+Add</button>
                </div>
            </div>
            <ShowNotes titles={this.state.title}/>            
        </div>
    )
}
}

export default InsertArea;
