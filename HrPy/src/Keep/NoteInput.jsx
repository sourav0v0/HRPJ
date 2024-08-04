import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./actions";
import "./stylesheets/input.css";

const NoteInput = React.memo(() => {
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    isPinned: false,
  });
  const [activePinned, setIsActivePinned] = useState(noteData.isPinned);

  const dispatch = useDispatch();

  const onTitleChange = (event) => {
    const value = event.target.value;
    setNoteData((prevData) => ({
      ...prevData,
      title: value,
    }));
  };

  const onDescriptionChange = (event) => {
    const value = event.target.value;
    setNoteData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  const onSubmitClicked = () => {
    const { title = "", description = "", isPinned } = noteData;
    if (title.length === 0 && description.length === 0) {
      alert("Please add the title or description");
      return;
    }
    dispatch(
      addNote({
        title,
        description,
        isPinned,
      })
    );
    setNoteData({ title: "", description: "" });
  };

  const pinnedNoteClicked = () => {
    setIsActivePinned(!activePinned, (isActive) => {
      setNoteData({ ...noteData, isPinned: isActive });
    });
  };

  return (
    <div className="container">
      <div className="center">
        <input
          value={noteData.title}
          type="text"
          onChange={onTitleChange}
          placeholder="Title"
          className="input titleInput"
        />
        <textarea
          value={noteData.description}
          type="text"
          onChange={onDescriptionChange}
          placeholder="Description"
          className="input titleInput"
        />
        <div className="flex">
          <input
            type="button"
            onClick={onSubmitClicked}
            className="onSubmit"
            value="Add Note"
          ></input>
          <input
            type="button"
            onClick={pinnedNoteClicked}
            className={`onSubmit ${activePinned ? "green" : "red"}`}
            value="Pinned Note"
          ></input>
        </div>
      </div>
    </div>
  );
});

export default NoteInput;
