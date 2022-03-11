import axios from '.';
import { TodoType } from '../../types/todo';

interface AddTodoAPIData {
  text: string;
  color: TodoType["color"];
}

export const getTodosAPI = () => axios.get<TodoType[]>('/api/todos');
export const checkTodoAPI = (id: number, data) => axios.patch(`/api/todos/${id}`, data);
export const addTodoAPI = (data: AddTodoAPIData) => axios.post<TodoType[]>('/api/todos', data);
export const delTodoAPI = (id: number) => axios.delete(`/api/todos/${id}`);
