import React from "react";
import NoteListItems from "./noteslistitem";

const NotesList = (props) => {
  const NoteItems = props.dataToShow.map((data) => {
    return <NoteListItems data={data} />;
  });
  return <div>{NoteItems}</div>;
};

export default NotesList;
