import { ActionTypes } from '../constants';

const loadData = (payload) => {
  console.log('@loadData: ', payload);
  return {
    type: ActionTypes.LOAD_DATA,
    payload // data of todos
  };
};

const toggleCheck = (payload) => {
  console.log('@toggleCheck: ', payload);
  return {
    type: ActionTypes.TOGGLE_CHECK,
    payload // id
  };
};

const addTodo = (payload) => {
  console.log('@addTodo: ', payload);
  return {
    type: ActionTypes.ADD_TODO,
    payload // data of single todo
  };
};

const deleteTodo = (payload) => {
  console.log('@deleteTodo: ', payload);
  return {
    type: ActionTypes.DELETE_TODO,
    payload // id
  };
};

export const todoActions = { loadData, addTodo, toggleCheck, deleteTodo };
