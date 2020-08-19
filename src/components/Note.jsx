import React from "react";

function Note(props) {
  function handleClick() {
    props.deleteAction(props.id);
  }

  return (
    <div id={props.id} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
