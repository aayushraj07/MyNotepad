import React, { Component } from "react";
import "./css/editor.css";

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
      <div className="container-fluid editor">
        <div className="row mb-2">
          <div className="col-5">
            <input
              placeholder="Your Title"
              value={this.state.title}
              type="text"
              name="title"
              onChange={this.onInputChangeTitle}
              style={{ margin: "0 10px" }}
            />
          </div>
          <div className="btn-toolbar col-7">
            <div className="btn-group">
              <button className="btn btn-sm">
                <strong>B</strong>
              </button>
              <button className="btn btn-sm">
                <strong>I</strong>
              </button>
              <button className="btn btn-sm">
                <strong>U</strong>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-1"></div>
          <textarea
            value={this.state.content}
            onChange={this.onInputChangeContent}
            name="content"
            placeholder="Your notes are safe here!"
            cols="100"
            rows="5"
          ></textarea>
        </div>
        <button
          onClick={() => this.props.handleInput(this.state)}
          className="btn btn-success"
        >
          +Add
        </button>
      </div>
    );
  }
}

export default Editor;
