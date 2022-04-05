import { ActionTypes } from '../constants';

const initialState: any = {
  todos: []
};

export const TodoReducer = (state = initialState, action) => {
  const handleToggleCheck = (id) => {
    return state.todos.map(todo => {
      if (todo.id === id) todo.checked = !todo.checked;
      return todo;
    });
  };

  const handleDeleteTodo = (id) => {
    return state.todos.filter(todo => todo.id !== id);
  };

  const { type, payload } = action;

  switch (type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        todos: payload
      };
    case ActionTypes.TOGGLE_CHECK:
      const newState = handleToggleCheck(payload);
      return {
        ...state,
        todos: newState
      };
    case ActionTypes.DELETE_TODO:
      const filteredTodoList = handleDeleteTodo(payload);
      return {
        ...state,
        todos: filteredTodoList
      };
    default:
      return state || {};
  }
};
