import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";
// import Axios from "axios";
import axios from "axios";
import "./css/noteslist.css";

class App extends Component {
  state = {
    notes: [{ title: "", content: "", id: "" }],
    // newNotes: [{ title: "", content: "", id: "" }],
  };

  //using Axios
  componentDidMount() {
    axios.get(`notes`).then((res) => {
      // this.setState((state) => {
      //   const newNotes = state.newNotes.concat(res.data);
      //   return {
      //     newNotes,
      //   };
      // });
      this.setState(res.data);
      console.log(this.state);
    });
  }

  // getId = () => {
  //   Axios.get(`notes`).then((res) => {});
  // };

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

  deleteNote = (event) => {
    // axios.post(`/delete/`).then(
    //   (Response) => {
    //     console.log(Response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    console.log("Deleting");
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
    // this.getBackend();
    this.backendLoad(val);

    // this.getNote();
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
          <NotesList
            dataToShow={this.state.notes}
            forDelete={this.deleteNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
