import React from "react";
import NoteListItems from "./noteslistitem";

const NotesList = (props) => {
  const NoteItems = props.notes.map((data) => {
    // console.log(data.id);
    // console.log(data.content);
    return (
      <NoteListItems
        key={data.id}
        data={data}
        deletefun={props.deleteNote}
        updatefun={props.updateNote}
      />
    );
  });

  return (
    <div>
      <ul>{NoteItems}</ul>
    </div>
  );
};

export default NotesList;
