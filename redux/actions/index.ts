import { ActionTypes } from '../constants';

const loadData = (payload) => {
  return {
    type: ActionTypes.LOAD_DATA,
    payload
  };
};

const addTodo = (payload) => {
  return {
    type: ActionTypes.LOAD_DATA,
    payload
  };
};

const toggleCheck = (payload) => {
  return {
    type: ActionTypes.LOAD_DATA,
    payload
  };
};

const deleteTodo = (payload) => {
  return {
    type: ActionTypes.LOAD_DATA,
    payload
  };
};

export const todoActions = { loadData, addTodo, toggleCheck, deleteTodo };
