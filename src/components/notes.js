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

  _updateNote = (id) => {
    updateNote(id)
      .then(() => {
        this._saveNote(id);
      })
      .catch(() => {});
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row topbar">
          <div className="col-lg-12">
            <h1>Notegram</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 notelist">
            <h5>Note List</h5>
            <NotesList
              notes={this.state.notes}
              deleteNote={this._deleteNote}
              updateNote={this._updateNote}
            />
          </div>
          <div className="col-md-6">
            <Editor className="editor" saveNote={this._saveNote} />
          </div>
        </div>
      </div>
    );
  }
}

export default Notes;
