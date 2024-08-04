import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import NoteContainer from './NoteContainer';
import NoteInput from './NoteInput';
import PinnedNotesContainer from './PinnedNoteContainer';

export default function Keep() {
  const notes = useSelector(state => state.notes || []);
  const pinnedNotes = [];
  const normalNotes = [];
  useEffect(()=>{
   const { pinned, notPinned } = notes.reduce((acc, item) => {
  if (item.isPinned) {
    acc.pinned.push(item);
  } else {
    acc.notPinned.push(item);
  }
  return acc;
}, { pinned: [], notPinned: [] });
  pinnedNotes.push(...pinned);
  normalNotes.push(...notPinned);
  }, [notes])
  return (
    <>
    <div>Keep</div>
    <NoteInput />
    <PinnedNotesContainer notes={pinnedNotes}/>
    <NoteContainer notes={normalNotes} />
    </>
  )
}
