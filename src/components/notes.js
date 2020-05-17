import React,{Component} from 'react';
import '../App.css';
import Editor from './editor';
import Item from './item';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:[
        {title:'',content:''},
    ]
    }
    this.handleInputValue = this.handleInputValue.bind(this);
  }
 
  //Callback function which is also adding data from child component
  handleInputValue(val) {
    this.setState({ ...val });
    console.log(val)
  }
 
  render() {
    return (
      <div className="container-fluid">
        <Editor handleInput={this.handleInputValue} />
        <Item dataToShow={this.notes} />
      </div>
    );
  }
}
 
export default App;


// import React,{Component} from 'react';
// import Editor from './editor';
// // import Item from './item';

// class Notes extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             title:''
//             // notes:
//             // [
//             //     {title:"Aayush Raj" , content:"developer"},
//             //     {title:"Honey" , content:"Engineer"}
//             // ]
//         }
//         this.callbackFun= this.callbackFun.bind(this)
//     }

//     callbackFun(){
//         // this.setState ({title:obje});    
//         console.log("Working")
//     }
//     render(){
//         return(
//             <div className="container-fluid">
//                 <Editor handleInput={this.callbackFun}/>
//             </div>
//         )
//     }
// }

// export default Notes;