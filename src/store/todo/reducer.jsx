import { todoTypes } from "./constants";

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return [...state, action.payload];
    case todoTypes.DELETE_TODO:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    case todoTypes.UPDATE_TODO:
      return state.map((todo) => {
        if (action.payload.id === todo.id) {
          return {
            ...todo,
            ...action.payload,
          };
        }
        return todo;
      });
    case todoTypes.SET_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
