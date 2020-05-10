import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/searchBar";
import InsertArea from "./components/insertarea";

function App() {
  return (
    <div className="App container-fluid">
        <Searchbar />
        <InsertArea />
    </div>
      );
}

export default App;
