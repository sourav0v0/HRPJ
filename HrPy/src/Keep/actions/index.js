import { ADD_NOTE, DELETE_NOTE, PINNED_NOTE, UNPINNED_NOTE } from "../type";

export const addNote = ({ title, description, isPinned }) => ({
  type: ADD_NOTE,
  data: { title, description, isPinned },
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  data: { id },
});

export const unpinnedNote = (id) => ({
  type: UNPINNED_NOTE,
  data: { id },
});

export const pinnedNote = (id) => ({
  type: PINNED_NOTE,
  data: { id },
});
