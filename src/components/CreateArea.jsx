import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.stopAction} onChange={props.inputAction}>
        <input
          name={props.title}
          value={props.titleValue}
          placeholder="Title"
        />
        <textarea
          name={props.content}
          value={props.contentValue}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.addAction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
