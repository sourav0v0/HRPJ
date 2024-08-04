import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNote } from './actions';

export default function NoteInput() {
  const [active,setIsActive] = useState(false);
  const [noteData , setNoteData] = useState({
    title: "",
    description: ""
  });
  const dispatch = useDispatch();
  const hideInput = useCallback(()=>{
    setIsActive(false);
  },[])
  useEffect(()=>{
    if(active){
        window.addEventListener('click', hideInput);
    }
    return ()=>{
     window.removeEventListener('click', hideInput);   
    }
  },[active])
  if(active){
    <input type="text" onClick={()=>{setIsActive(true)}} />
  }
  const onTitleChange = (event) => {
    const value = event.target.value;
    const { description } = nodeData;
    setNoteData({
        title: value,
        description: description
    })
  }
  const onSubtitleChange = (event) => {
    const value = event.target.value;
    const { title } = nodeData;
    setNoteData({
        title: title,
        description: value
    })
  }
  const onSubmit = () =>{
    const { title , description} = nodeData;
    dispatch(addNote({
      title,
      description,
      isPinned: false
    }))
  }
  
  return (<>
    <input value={noteData.title} type="text" onClick={onTitleChange} />
    <input value={noteData.description} type="text" onClick={onSubtitleChange} />
    <input type="submit" onClick={onSubmit}>Submit</input>
    </>
  )
}
