import React from "react";
import NoteListItems from "./noteslistitem";
import "./css/noteslist.css";

const NotesList = (props) => {
  console.log(props);
  const NoteItems = props.dataToShow.map((data) => {
    return <NoteListItems data={data} />;
  });
  return <div>{NoteItems}</div>;
};

export default NotesList;
