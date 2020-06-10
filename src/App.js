import React from "react";
import "./App.css";
import Notes from "./components/notes";

function App() {
  // useEffect(() => {
  //   fetch("/notes").then(response =>
  //     response.json().then(data => {
  //       console.log(data)
  //     })
  //   );
  // }, []);
  return (
    <div className="App">
      <Notes />
    </div>
  );
}

export default App;
