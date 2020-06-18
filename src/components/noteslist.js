import React from "react";
import NoteListItems from "./noteslistitem";

const NotesList = (props) => {
  const NoteItems = props.dataToShow.map((data) => {
    // console.log(data.id);
    // console.log(data.content);
    return (
      <NoteListItems
        key={data.content}
        data={data}
        deletefun={props.forDelete}
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
