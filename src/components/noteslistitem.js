import React from "react";

const NoteListItems = (props) => {
  // const data = props.data;
  return (
    <div className="container items">
      <div className="row">
        <b>Title:</b>
        {props.data.title} <b>Content:</b>
        {props.data.content}
      </div>
      <button
        onClick={() => props.deletefun(props.data.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
      <button
        onClick={() => props.updatefun(props.data.id)}
        className="btn btn-info"
      >
        Update
      </button>
    </div>
  );
};

export default NoteListItems;
