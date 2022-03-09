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

export default async (req: NextApiRequest, res: NextApiResponse<TodoType[]>) => {
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
      return res.send(todos);
    } catch (e) {
      console.error(e);
      // Internal Server Error
      res.statusCode = 500;
      // res.send(e); // type error of NextApiResponse<TodoType[]>
    }
  }
  return console.log('@1: ', req.method);
};
