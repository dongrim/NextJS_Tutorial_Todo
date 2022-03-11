import { ActionTypes } from '../constants';

export const loadData = () => {
  return {
    type: ActionTypes.LOAD_DATA,
    payload: 100
  };
};
