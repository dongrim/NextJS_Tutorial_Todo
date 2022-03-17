import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { TodoReducer } from '../reducers';

const rootReducer = combineReducers({
  TodoStates: TodoReducer,
});

/* const reducer = (state, action) => {
  // HYDRATE = "__NEXT_REDUX_WRAPPER_HYDRATE__"
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  }
  return rootReducer(state, action);
}; */

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    default:
      return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = () => (createStore(reducer, bindMiddleware([])));

export const wrapper = createWrapper(initStore);
