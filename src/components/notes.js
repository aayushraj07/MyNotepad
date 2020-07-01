import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";

// service Imports
import {
  fetchAllNotes,
  saveNote,
  deleteNote,
  updateNote,
} from "../services/services";

class Notes extends Component {
  state = {
    notes: [],
    isEdit: false,
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
    saveNote(note)
      .then(() => {
        this._fetchNotes();
      })
      .catch(() => {});
  };

  _deleteNote = (id) => {
    deleteNote(id)
      .then(() => {
        this._fetchNotes();
      })
      .catch(() => {});
  };

  _updateNote = (id, note) => {
    // console.log(id);
    this.setState({
      isEdit: true,
    });
    updateNote(id, note)
      .then((res) => {
        this._fetchNotes(res);
      })
      .catch(() => {});
    this.setState({ isEdit: false });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <Editor
              className="editor"
              saveNote={this._saveNote}
              updateNote={this._updateNote}
              editSwitch={this.state.isEdit}
            />
          </div>
        </div>
        <div className="row">
          {/* <div className="sidenav"> */}
          <h5>Your Notes</h5>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <NotesList
            notes={this.state.notes}
            deleteNote={this._deleteNote}
            updateNote={this._updateNote}
          />
        </div>
      </div>
    );
  }
}

export default Notes;
