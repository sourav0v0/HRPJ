import React, { useEffect, useState, useCallback } from "react";
import NoteContainer from "./NoteContainer";
import NoteInput from "./NoteInput";
import { useDispatch, useSelector } from "react-redux";
import { unpinnedNote, pinnedNote } from "./actions";
import { splitNotesByPinnedStatus } from "./utils";
export default function Keep() {
  const notes = useSelector((state) => state.notes || []);
  const dispatch = useDispatch();
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const [normalNotes, setNormalNotes] = useState([]);
  const handlePinClick = useCallback(
    (id) => {
      dispatch(pinnedNote(id));
    },
    [dispatch]
  );

  const handleUnpinClick = useCallback(
    (id) => {
      dispatch(unpinnedNote(id));
    },
    [dispatch]
  );
  useEffect(() => {
    const { pinned, notPinned } = splitNotesByPinnedStatus(notes);
    setPinnedNotes(pinned);
    setNormalNotes(notPinned);
  }, [notes]);
  return (
    <>
      <h1>Keep</h1>
      <NoteInput />
      <NoteContainer
        notes={pinnedNotes}
        title="Pinned Notes"
        onPinClick={handleUnpinClick}
      />
      <NoteContainer
        notes={normalNotes}
        title="Normal Notes"
        onPinClick={handlePinClick}
      />
    </>
  );
}
