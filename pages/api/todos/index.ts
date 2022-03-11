/*
import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from '../../types/todo';
import todos from "../../data/todos.json";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TodoType[] | any>
) {
  res.status(200).send(todos);
}
*/

// path.resolve(__dirname, '../../../../data/todos.json');
import type { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from '../../../types/todo';
import Data from '../../../lib/data';

export default async (req: NextApiRequest, res: NextApiResponse<TodoType[]>): Promise<void> => {
  if (req.method === "GET") {
    try {
      /*
      const todos = await new Promise<TodoType[]>((resolve, reject) => {
        fs.readFile('./data/todos.json', (err, data) => {
          if (err) reject(err.message);
          const todosData = data?.toString();
          if (!todosData) resolve([]);
          const todos = JSON.parse(todosData);
          return resolve(todos);
        });
      });
      */
      const todos = Data.todos.getList();
      res.statusCode = 200;
      res.send(todos);
    } catch (e) {
      console.error(e);
      // Internal Server Error
      res.statusCode = 500;
      res.end(e);
    }
  }
  if (req.method === "POST") {
    const { text, color } = req.body;
    if (!text || !color) {
      // Bad Request
      res.statusCode = 400;
      res.end('Not received text or color');
    }
    const todos = Data.todos.getList();
    let todoId: number;
    if (todos.length > 0) {
      todoId = todos[todos.length - 1].id + 1;
    } else {
      todoId = 1;
    }
    const newTodo: TodoType = {
      id: todoId,
      text,
      color,
      checked: false
    };
    Data.todos.appendTodo(newTodo);
    res.statusCode = 200;
    res.end();
  }
  // Method Not Allowed
  res.statusCode = 405;
  res.end();
};
