import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../../types/todo";

interface TodoState {
  todos: TodoType[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<TodoType[]>) => {
      console.log('@action: ', action);
      state.todos = action.payload;
    },
    toggleTodo: (state, action: PayloadAction<{id: number}>) => {
      state.todos.forEach(todo => {
        if (todo.id === action.payload.id) todo.checked = !todo.checked;
      });
    },
    addTodo: () => {
      // code here
    },
    deleteTodo: (state, action: PayloadAction<{id: number}>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { setTodo, toggleTodo, addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
