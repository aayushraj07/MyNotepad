import React from "react";

const NoteListItems = ({ props }) => {
  console.log(props);
  return <li className="list-group">{props}</li>;
};

export default NoteListItems;
