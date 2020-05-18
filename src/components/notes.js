import React,{Component} from 'react';
import '../App.css';
import Editor from './editor';
import NoteList from './noteslist';

class App extends Component {
    state = {
      notes:[
        {title:"First Note",content:"This one is for trial"}
    ],
    count: 0
    }
  
 
  //Callback function which is also adding data from child component
  handleInputValue=(val)=> {
    this.setState(state=>{
      const notes = state.notes.concat(val);
      return{
        notes
      }
    },()=>console.log(this.state)
    )
    this.setState({ count: this.state.count+1});
    console.log(this.state)
    // debugger;
  }
 
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <Editor handleInput={this.handleInputValue} />
        </div>
        <div className="row">
            <NoteList dataToShow={this.state.notes[0]} />  
        </div>        
      </div>
    );
  }
}
 
export default App;

