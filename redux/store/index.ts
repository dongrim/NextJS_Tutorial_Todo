import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import { TodoReducer } from '../reducers';
// export const TodoDataStore = createStore(TodoReducer);

const rootReducer = combineReducers({
  TodoReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  }
  return rootReducer(state, action);
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
