import { ADD_NOTE , DELETE_NOTE,DONE_NOTE } from "../type";

export const addNote = text => ({
  type: ADD_NOTE,
  id: nextTodoId++,
  text
})

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
})

export const doneNote = id => ({
  type: DONE_NOTE,
  id
})
