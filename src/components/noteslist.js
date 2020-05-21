import React from "react";
import NoteListItems from "./noteslistitem";

const NotesList = (props) => {
  const items = Object.entries(props.dataToShow);
  const NoteItems = items.map((data) => {
    return <NoteListItems key={props.count} data={data} />;
  });
  return <div>{NoteItems}</div>;
};

export default NotesList;

// if (props.dataToShow instanceof Array) {
//     console.log("all good");
//     debugger;
//   } else {
//     console.log("nope");
//   }
