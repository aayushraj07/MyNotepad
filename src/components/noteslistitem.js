import React from "react";

const NoteListItems = ({ props }) => {
  console.log(props);
  return (
    <div>
      <li className="list-group">{props}</li>
    </div>
  );
};

export default NoteListItems;
