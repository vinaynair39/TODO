import { todoTypes } from "./constants";

export const addTodo = (todo) => ({
  type: todoTypes.ADD_TODO,
  payload: todo,
});
export const deleteTodo = (id) => ({
  type: todoTypes.DELETE_TODO,
  payload: id,
});
export const updateTodo = (todo) => ({
  type: todoTypes.UPDATE_TODO,
  payload: todo,
});

export const setTodos = (todos) => ({
  type: todoTypes.SET_TODO,
  payload: todos,
});
