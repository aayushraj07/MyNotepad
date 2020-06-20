import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";
// import Axios from "axios";
import axios from "axios";
import "./css/noteslist.css";

// service Imports
import { fetchAllNotes, saveNote } from "../services/services";

class Notes extends Component {
  state = {
    notes: [],
  };

  //using Axios
  componentDidMount() {
    this._fetchNotes();
  }

  _fetchNotes = () => {
    fetchAllNotes()
      .then((res) => {
        this.setState({
          notes: res.notes,
        });
      })
      .catch(() => {});
  };

  _saveNote = (note) => {
    console.log(note);
    saveNote(note)
      .then((res) => {
        this._fetchNotes();
        console.log(res);
      })
      .catch(() => {});
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Editor className="editor" saveNote={this._saveNote} />
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
