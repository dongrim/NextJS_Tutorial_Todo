import fs from 'fs';
import { TodoType } from '../../types/todo';

const getList = () => {
  const todosBuffer = fs.readFileSync('./data/todos.json');
  const todosString = todosBuffer?.toString();
  if (!todosString) {
    return [];
  }
  const todos: TodoType[] = JSON.parse(todosString);
  return todos;
};

const existId = (id: number): boolean => {
  const todos = getList();
  const isExist = todos.some(todo => todo.id === id);
  return isExist;
};

export default { getList, existId };
