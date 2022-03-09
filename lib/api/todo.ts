import axios from '.';
import { TodoType } from '../../types/todo';

export const getTodosAPI = () => axios.get<TodoType[]>('api/todos');
export const toggleCheckAPI = (id, checked) => axios.patch(`api/todos/${id}`, { checked: !checked });
