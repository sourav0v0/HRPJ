import React, { useEffect } from 'react'
import Note from './Note';

function NoteContainer({
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

export default NoteContainer;