import { ADD_NOTE , DELETE_NOTE,DONE_NOTE } from "../type";

export const addNote = ({
  title,
  description,
  isPinned,
}) => ({
  type: ADD_NOTE,
  data: {  title,
  description,
  isPinned,}
})

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

export const doneNote = id => ({
  type: DONE_NOTE,
  id
})
