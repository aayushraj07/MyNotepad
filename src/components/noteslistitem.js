import React from "react";

const NoteListItems = ({ props }) => {
  return (
    <div>
      <li className="list-group">{props}</li>
    </div>
  );
};

export default NoteListItems;
