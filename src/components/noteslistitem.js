import React from "react";

const NoteListItems = ({ data }) => {
  // const data = props.data;
  console.log(data);
  return (
    <div>
      {data.title}
      {data.content}
    </div>
  );
};

export default NoteListItems;
