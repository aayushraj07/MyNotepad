import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content:''
    }
    this.onInputChangeTitle = this.onInputChangeTitle.bind(this);
    this.onInputChangeContent = this.onInputChangeContent.bind(this);
    this.hanldeSubmit = this.hanldeSubmit.bind(this);
  }
  onInputChangeTitle(event) {
    event.preventDefault();
    this.setState({ title: event.target.value });
  }
  onInputChangeContent(event) {
    event.preventDefault();
    this.setState({ content: event.target.value });
  } 
  // handle button click event and pass data in parent
  hanldeSubmit() {
    var obje = JSON.stringify(this.state);
    this.props.handleInput(obje);
  }

  render() {
    return (
        <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-5"> 
                    <form onSubmit={this.handleSubmit}>
                        <input  placeholder="Your Title" value={this.state.title} type="text" name="title" onChange={this.onInputChangeTitle} style={{ margin: '0 10px' }} /> 
                    </form>
                    </div>
                <div className="btn-toolbar col-7">
                    <div className="btn-group">
                        <button className="btn btn-sm"><strong>B</strong></button>
                        <button className="btn btn-sm"><strong>I</strong></button>
                        <button className="btn btn-sm"><strong>U</strong></button>
                    </div>
                </div>
                </div>

                <div className="row">
                    <div className="col-1"></div>
                    <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.content} onChange={this.onInputChangeContent} name="content" placeholder="Your notes are safe here!" cols="100" rows="5"></textarea>
                    </form>
                </div>
                <button onClick={this.hanldeSubmit} className="btn btn-success">+Add</button>
            </div>
    );
  }
}

export default Editor;



// import React,{Component} from 'react';

// class Editor extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             title:"",
//             content:""
//         };
//         this.handleSubmit=this.handleSubmit.bind(this);
//         this.handleInputChange=this.handleInputChange.bind(this);
//         this.addClicked=this.addClicked.bind(this);
//     }
//     handleSubmit=(event)=>{
//         event.preventDefault();
//      }
//      handleInputChange=(event)=>{
//          this.setState({
//              [event.target.name]: event.target.value
//          })
//     }
//     addClicked(){
//         // event.preventDefault();
//         this.props.handleInput(this.state.title);
//     }
//     render(){
//         return(
            // <div className="container-fluid">
            //     <div className="row mb-2">
            //         <div className="col-5"> 
            //         <form onSubmit={this.handleSubmit}>
            //             <input placeholder="Your Title" value={this.state.title} type="text" name="title" onChange={this.handleInputChange}>
            //             </input>
            //         </form>
            //         </div>
            //     <div className="btn-toolbar col-7">
            //         <div className="btn-group">
            //             <button className="btn btn-sm"><strong>B</strong></button>
            //             <button className="btn btn-sm"><strong>I</strong></button>
            //             <button className="btn btn-sm"><strong>U</strong></button>
            //         </div>
            //     </div>
            //     </div>

            //     <div className="row">
            //         <div className="col-1"></div>
            //         <form onSubmit={this.handleSubmit}>
            //         <textarea value={this.state.content} onChange={this.handleInputChange} name="content" placeholder="Your notes are safe here!" cols="100" rows="5"></textarea>
            //         </form>
            //     </div>
            //     <br></br>
            //     <div className="row mb-4">
            //         <div className="col-9"></div>
            //         <div>
            //         <button onClick={this.addClicked} className="btn btn-success">+Add</button>
            //         </div>
            //     </div>
            // </div>
//         )
//     }
// }

// export default Editor;