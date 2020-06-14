import React from "react";

const NoteListItems = ({ data }) => {
  // const data = props.data;
  return (
    <div>
      Title:{data.title}, Content:{data.content}
    </div>
  );
};

export default NoteListItems;
