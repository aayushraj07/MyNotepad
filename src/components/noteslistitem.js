import React from "react";

const NoteListItems = (props) => {
  // const data = props.data;
  return (
    <div>
      Title:{props.data.title}, Content:{props.data.content}
      <button onClick={() => props.deletefun()} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default NoteListItems;
