import React from "react";
import Note from "./Note";

export default function NoteContainer({ notes, title, onPinClick }) {
  const renderNotes = (noteList = []) =>
    noteList.map((note) => (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        description={note.description}
        isPinned={note.isPinned}
        onPinClick={onPinClick}
      />
    ));

  const notesItems = renderNotes(notes);
  if (notesItems.length === 0) {
    return null;
  }
  return (
    <div className="pt-4">
      <p>{title}</p>
      <div className="noteContainer">{notesItems}</div>
    </div>
  );
}
