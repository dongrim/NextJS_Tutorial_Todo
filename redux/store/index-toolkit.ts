import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const rootReducer = combineReducers({
  TodoStates: todoReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // ?
    return nextState;
  }
  return rootReducer(state, action);
};

// type of store
export type RootState = ReturnType<typeof rootReducer>;
// customize useSelector loaded with store type
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () =>
  configureStore({
    reducer,
    devTools: true,
  });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// declare module "*.svg";
declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export const wrapper = createWrapper(initStore);
