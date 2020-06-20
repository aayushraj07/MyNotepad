import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";
// import Axios from "axios";
import axios from "axios";
import "./css/noteslist.css";

// service Imports
import { fetchAllNotes } from "../services/services";

class Notes extends Component {
  state = {
    notes: [],
    // newNotes: [{ title: "", content: "", id: "" }],
  };

  //using Axios
  componentDidMount() {
    fetchAllNotes()
      .then((res) => {
        this.setState({
          notes: res.notes,
        });
      })
      .catch(() => {});
    // axios.get(`notes`).then((res) => {
    //   // this.setState((state) => {
    //   //   const newNotes = state.newNotes.concat(res.data);
    //   //   return {
    //   //     newNotes,
    //   //   };
    //   // });
    //   this.setState(res.data);
    //   console.log(this.state.notes);
    // });
  }

  // getId = () => {
  //   Axios.get(`notes`).then((res) => {});
  // };

  saveNote = (val) => {
    fetch("/add_note", {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(val),
    });
    // .then((respnse) => respnse.json())
    // .then((data) => {
    //   console.log("Success", data);
    // });Query
    console.log("Worked! Posted");
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
  // handleInputValue = (val) => {
  //   this.setState(
  //     (state) => {
  //       const notes = state.notes.concat(val);
  //       return {
  //         notes,
  //       };
  //     },
  //     () => console.log(this.state)
  //   );
  //   // this.getBackend();
  //   this.saveNote(val);

  //   // this.getNote();
  // };

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
          <NotesList notes={this.state.notes} forDelete={this.deleteNote} />
        </div>
      </div>
    );
  }
}

export default Notes;
