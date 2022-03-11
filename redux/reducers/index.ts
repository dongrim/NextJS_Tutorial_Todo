import { ActionTypes } from '../constants';

export const TodoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.LOAD_DATA:
      return {
        ...state,
        value: payload
      };
    default:
      return state || {};
  }
};
