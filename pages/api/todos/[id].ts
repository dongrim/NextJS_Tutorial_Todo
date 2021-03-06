import type { NextApiRequest, NextApiResponse } from "next";
// import { TodoType } from '../../../types/todo';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  /* if (req.method === "GET") {
    try {
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile('./data/todos.json', (err, data) => {
          if (err) reject(err.message);
          const todosData = data?.toString();
          if (!todosData) resolve([]);
          const todos = JSON.parse(todosData);
          return resolve(todos);
        });
      });
      const filteredTodo = todos.filter(todo => todo.id === Number(id));
      res.statusCode = 200;
      res.send(filteredTodo[0]);
    } catch (e) {
      console.error(e);
      // Internal Server Error
      res.statusCode = 500;
      // res.send(e); // type error of NextApiResponse<TodoType[]>
    }
  } */
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todos = Data.todos.getList();
      const todo = Data.todos.existId(todoId);
      if (!todo) {
        // 404: Not Found
        res.statusCode = 404;
        res.end();
      }
      const changedTodos = todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      Data.todos.writeList(changedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.error(e);
      // 500: Internal Server Error
      res.statusCode = 500;
      res.end(e);
    }
  }
  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todos = Data.todos.getList();
      const todo = Data.todos.existId(todoId);
      if (!todo) {
        res.statusCode = 404;
        res.end();
      }
      const filtetedTodos = todos.filter(todo => todo.id !== todoId);
      Data.todos.deleteTodo(filtetedTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.error(e);
      res.statusCode = 500;
      res.end(e);
    }
  }
  res.statusCode = 405;
  res.end();
};
