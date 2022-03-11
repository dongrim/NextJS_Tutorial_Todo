import { createStore } from 'redux';
import { TodoReducer } from '../reducers';

export const TodoDataStore = createStore(TodoReducer);
