import { ADD_NOTE , DELETE_NOTE,DONE_NOTE } from "../type";
import { combineReducers } from 'redux'

const intialState = [];
const notes = (state = intialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const { data } = action;
      const {  title,
  description,
  isPinned} = data;
    const length = state.length;
      return [
        ...state,
        {
          id: length,
            title,
  description,
  isPinned,
        }
      ]
    case DELETE_NOTE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case DONE_NOTE:
        return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notes
})

export default rootReducer;
