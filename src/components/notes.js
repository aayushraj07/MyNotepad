import React,{Component} from 'react';
import '../App.css';
import Editor from './editor';
import Item from './item';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:[
        {title:"First Note",content:"This one is for trial"}
    ],
    count: 0
    }
    this.handleInputValue = this.handleInputValue.bind(this);
  }
 
  //Callback function which is also adding data from child component
  handleInputValue(val) {
    this.setState(state=>{
      const notes = state.notes.concat(val);
      return{
        notes
      }
    })
    this.setState({ count: this.state.count+1});
    console.log(this.state)
  }
 
  render() {
    return (
      <div className="container-fluid">
        <Editor handleInput={this.handleInputValue} />
        <Item dataToShow={this.notes[this.state.count]} />
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