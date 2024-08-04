import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "./actions";
import "./stylesheets/note.css";

export default function Note({
  id,
  title,
  description,
  isPinned = false,
  onPinClick,
}) {
  const dispatch = useDispatch();

  const handlePinClick = useCallback(() => {
    if (typeof onPinClick === "function") {
      onPinClick(id);
    }
  }, [id, onPinClick]);

  const handleDeleteClick = useCallback(() => {
    dispatch(deleteNote(id));
  }, [dispatch, id]);

  return (
    <div className="note">
      {title && <p>{title}</p>}
      <span>{description}</span>
      <div className="pt-4">
        <input
          type="button"
          onClick={handleDeleteClick}
          className={`onSubmit`}
          value="Delete Note"
        ></input>
        <input
          type="button"
          onClick={handlePinClick}
          className={`onSubmit ${isPinned ? "green" : "red"}`}
          value={isPinned ? "UnPinned Note" : "Pinned Note"}
        ></input>
      </div>
    </div>
  );
}
