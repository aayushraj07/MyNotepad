import React, { Component } from "react";
import Editor from "./editor";
import NotesList from "./noteslist";

class App extends Component {
  state = {
    notes: [{ title: "First Note", content: "This one is for trial" }],
    count: 0,
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
    this.setState({ count: this.state.count + 1 });
    // debugger;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <NotesList dataToShow={this.state.notes} />
          </div>
          <div className="col-9">
            <Editor handleInput={this.handleInputValue} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
