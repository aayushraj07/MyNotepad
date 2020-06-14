import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";
// import Axios from "axios";
import axios from "axios";
import "./css/noteslist.css";

class App extends Component {
  state = {
    notes: [{ title: "", content: "" }],
  };

  //using Axios
  componentDidMount() {
    axios.get(`notes`).then((res) => {
      this.setState(res.data);
      console.log(this.state);
    });
  }

  // componentDidMount(){
  //   axios.post(`add_notes` , {
  //     headers:{
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },body: JSON.stringify(val),
  //   })
  //   .then((respnse) => respnse.json())
  //   .then((data) => {
  //     console.log("Success", data)
  //   });
  // }

  backendLoad = (val) => {
    fetch("/add_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((respnse) => respnse.json())
      .then((data) => {
        console.log("Success", data);
      });
  };

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
    this.backendLoad(val);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Editor className="editor" handleInput={this.handleInputValue} />
          </div>
        </div>
        <div className="row">
          {/* <div className="sidenav"> */}
          <h5>Your Notes</h5>
        </div>

        <div className="row">
          <div className="col-4"></div>
          <NotesList dataToShow={this.state.notes} />
        </div>
      </div>
    );
  }
}

export default App;
