import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteNote, doneNote} from './actions/index';

export default function Note({
    id,
    title,
    description,
    isPinned = false,
    onPinCicked 
}) {

  const dispatch = useDispatch();
  const onPinClick = useCallback(() =>{
    if(typeof onPinCicked  === "function"){
        onPinCicked({
            id
        });
    }
  },[])
   const onDeleteClick = useCallback((id) =>{
    useDispatch(deleteNote(id));
  },[])
   const onDoneCLick = useCallback(() =>{
    useDispatch(doneNote(id));
  },[])
  return (
    <div className='note'>
        {title && <p>{title}</p>}
        <span>{description}</span>
        <div>
            <span onClick={onDeleteClick}>Delete</span>
            <span onClick={onDoneCLick}>Done</span>
            <span onClick={onPinClick}>{isPinned ? `Unpined Pin`: `Pin Me`} </span>
        </div>
    </div>
  )
}
