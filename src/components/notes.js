import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";
// import Axios from "axios";
import axios from "axios";
// import "./css/noteslist.css";

class App extends Component {
  state = {
    notes: [{ title: "", content: "" }],
  };

  //using Axios
  componentDidMount() {
    axios.get(`/notes`).then((res) => {
      this.setState(res.data);
      console.log(this.state);
    });
  }

  //Callback function which is also adding data from child component
  handleInputValue = (val) => {
    this.setState(
      (state) => {
        const notes = state.notes.concat(val);
        return {
          notes,
        };
      },
      () => console.log(this.state)
    );
    // debugger;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Editor handleInput={this.handleInputValue} />
          </div>
        </div>
        <div className="row">
          {/* <div className="sidenav"> */}
          <h5>Your Notes</h5>
          <NotesList dataToShow={this.state.notes} />
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;
