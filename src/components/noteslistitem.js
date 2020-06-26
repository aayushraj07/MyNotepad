import React from "react";

const NoteListItems = (props) => {
  // const data = props.data;
  return (
    <div>
      Title:{props.data.title}, Content:{props.data.content}
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
