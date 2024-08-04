import { combineReducers } from "redux";
import { ADD_NOTE, DELETE_NOTE, UNPINNED_NOTE, PINNED_NOTE } from "../type";

const initialState = [];

const notes = (state = initialState, action) => {
  const { data = {}, type } = action;
  const { title, description, isPinned, id = -1 } = data;
  switch (type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: state.length,
          title,
          description,
          isPinned,
        },
      ];
    case DELETE_NOTE:
      return state.filter((note) => note.id !== id);
    case PINNED_NOTE:
      return state.map((note) =>
        note.id === id ? { ...note, isPinned: true } : note
      );
    case UNPINNED_NOTE:
      return state.map((note) =>
        note.id === id ? { ...note, isPinned: false } : note
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notes,
});

export default rootReducer;
