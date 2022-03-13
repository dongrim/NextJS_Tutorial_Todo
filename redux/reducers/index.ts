import { ActionTypes } from '../constants';

const initialState = {
  // count: 0
};

export const TodoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        todos: payload
      };
    default:
      return state || {};
  }
};
