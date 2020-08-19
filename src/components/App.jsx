import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import noteArray from "../Input";

// const array1 = noteArray;

function App() {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  const [array1, setArray1] = useState(noteArray);

  function update(event) {
    const { name, value } = event.target;
    // console.log(name)
    setNewNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function addNote() {
    setArray1((prevValue) => [newNote, ...prevValue]);
    setNewNote({
      title: "",
      content: ""
    });
  }

  function deleteNote(id) {
    setArray1((prevValues) => {
      return prevValues.filter((eachNote, index) => {
        return index !== id;
      });
    });
  }

  function stopSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Header />
      <CreateArea
        stopAction={stopSubmit}
        inputAction={update}
        addAction={addNote}
        title="title"
        content="content"
        titleValue={newNote.title}
        contentValue={newNote.content}
      />
      {array1.map(function Entries(Userinputs, index) {
        return (
          <Note
            key={index}
            id={index}
            title={Userinputs.title}
            content={Userinputs.content}
            deleteAction={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
