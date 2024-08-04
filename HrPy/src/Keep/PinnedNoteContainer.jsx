import React, { useEffect } from 'react'
import Note from './Note';

export default function PinnedNotesContainer({
  notes
}) {
  const NoteLists = notes.map(notes =>{
      const { tilte , description , isPinned }  = notes;
      return <Note id={id} tilte={tilte} description={description} isPinned={isPinned} onPinnedClick={{}} />
    })
  return (
    <>
    <p> Pinned Noted</p>
    {NoteLists}
    </>
  )
}
