import React from "react";
import NoteListItems from "./noteslistitem";

const NotesList = (props) => {
  console.log(props);
  const NoteItems = props.dataToShow.map((data) => {
    return <NoteListItems key={data.content} data={data} />;
  });
  return <ul>{NoteItems}</ul>;
};

export default NotesList;
