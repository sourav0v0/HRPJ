import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

export default function NoteInput() {
  const [active, setIsActive] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    description: ""
  });

  const dispatch = useDispatch();

  const hideInput = useCallback(() => {
    setIsActive(false);
  }, []);

  useEffect(() => {
    if (active) {
      window.addEventListener('click', hideInput);
    } else {
      window.removeEventListener('click', hideInput);
    }
    return () => {
      window.removeEventListener('click', hideInput);
    };
  }, [active, hideInput]);

  const onTitleChange = (event) => {
    const value = event.target.value;
    setNoteData((prevData) => ({
      ...prevData,
      title: value
    }));
  };

  const onDescriptionChange = (event) => {
    const value = event.target.value;
    setNoteData((prevData) => ({
      ...prevData,
      description: value
    }));
  };

  const onSubmit = () => {
    const { title, description } = noteData;
    dispatch(addNote({
      title,
      description,
      isPinned: false
    }));
    setNoteData({ title: "", description: "" });
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setIsActive(true);
  };

  return (
    <>
      <input
        value={noteData.title}
        type="text"
        onClick={handleInputClick}
        onChange={onTitleChange}
        placeholder="Title"
      />
      <input
        value={noteData.description}
        type="text"
        onClick={handleInputClick}
        onChange={onDescriptionChange}
        placeholder="Description"
      />
      <input
        type="button"
        onClick={onSubmit}
        value="Submit"
      />
    </>
  );
}
