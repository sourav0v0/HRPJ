import { ADD_NOTE , DELETE_NOTE,DONE_NOTE } from "../type";
import { combineReducers } from 'redux'

const intialState = [];
const notes = (state = intialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
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
