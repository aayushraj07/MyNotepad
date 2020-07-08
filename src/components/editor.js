import React, { Component } from "react";

class Editor extends Component {
  state = {
    title: "",
    content: "",
  };
  onInputChangeTitle = (event) => {
    event.preventDefault();
    this.setState({ title: event.target.value });
  };
  onInputChangeContent = (event) => {
    event.preventDefault();
    this.setState({ content: event.target.value });
  };
  // handle button click event and pass data in parent

  render() {
    return (
      <div className="conatiner mt-4 editor">
        <div className="row mb-1">
          <input
            placeholder="Your Title"
            value={this.state.title}
            type="text"
            name="title"
            onChange={this.onInputChangeTitle}
          />
        </div>
        <div className="row">
          <textarea
            value={this.state.content}
            onChange={this.onInputChangeContent}
            name="content"
            placeholder="Your notes are safe here!"
            cols="100"
            rows="8"
          ></textarea>
          <button
            disabled={!this.state.content || !this.state.title}
            onClick={() => this.props.saveNote(this.state)}
            className="btn btn-outline-dark mt-1"
          >
            +Add
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
