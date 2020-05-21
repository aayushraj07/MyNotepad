import React from "react";
import "./App.css";
import Notes from "./components/notes";
import Searchbar from "./components/searchBar";

function App() {
  return (
    <div className="App container-fluid">
      <Searchbar />
      <Notes />
    </div>
  );
}

export default App;
