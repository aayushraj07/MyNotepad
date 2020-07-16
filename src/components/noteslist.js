import React from "react";
import NoteListItems from "./noteslistitem";
import "css/drag.css";

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
    <div class="empty">
      <div className="fill" draggable="true">
        <ul>{NoteItems}</ul>
      </div>
    </div>
  );
};

export default NotesList;
