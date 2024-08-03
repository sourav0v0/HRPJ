import React from 'react'

export default function Note({
    id,
    title,
    description,
    isPinned = false,
    onPinCicked 
}) {
  const onPinClick = useCallback(() =>{
    if(typeof onPinCicked  === "function"){
        onPinCicked({
            id
        });
    }
  },[])
   const onDeleteClick = useCallback(() =>{
    if(typeof onPinCicked  === "function"){
        onPinCicked({
            id
        });
    }
  },[])
   const onDoneCLick = useCallback(() =>{
    if(typeof onPinCicked  === "function"){
        onPinCicked({
            id
        });
    }
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
