import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./actions";
import "./stylesheets/input.css";

const NoteInput = React.memo(() => {
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    color: "#ffffff",
    isPinned: false,
  });
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

  const onColorChange = (event) => {
    const value = event.target.value;
    setNoteData((prevData) => ({
      ...prevData,
      color: value,
    }));
  };

  const onSubmitClicked = () => {
    const {
      title = "",
      description = "",
      color = "#ffffff",
      isPinned = false,
    } = noteData;
    if (title.length === 0 && description.length === 0) {
      alert("Please add the title or description");
      return;
    }
    dispatch(
      addNote({
        title,
        description,
        isPinned,
        color,
      })
    );
    setNoteData({ title: "", description: "" });
  };

  const pinnedNoteClicked = () => {
    const { isPinned } = noteData;
    setNoteData({ ...noteData, isPinned: !isPinned });
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
          <div>
            <label htmlFor="favcolor">Pick Color</label>
            <input
              type="color"
              id="favcolor"
              className="favcolor"
              name="favcolor"
              onChange={onColorChange}
              value={noteData.color}
            />
          </div>
          <input
            type="button"
            onClick={onSubmitClicked}
            className="onSubmit"
            value="Add Note"
          ></input>
          <input
            type="button"
            onClick={pinnedNoteClicked}
            className={`onSubmit ${noteData.isPinned ? "red" : "green"}`}
            value={`${noteData.isPinned ? "Pinned Note" : "UnPinned Note"}`}
          ></input>
        </div>
      </div>
    </div>
  );
});

export default NoteInput;
