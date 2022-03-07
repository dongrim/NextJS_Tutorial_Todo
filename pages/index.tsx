import { useState } from 'react';
import type { NextPage } from 'next';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';

const todos: TodoType[] = [
  { id: 1, text: 'shopping', color: 'red', checked: false },
  { id: 2, text: 'do home work', color: 'orange', checked: false },
  { id: 3, text: 'coding', color: 'yellow', checked: true },
  { id: 4, text: 'study nextJS', color: 'green', checked: true },
  { id: 5, text: 'cook', color: 'blue', checked: false },
  { id: 6, text: 'recycling', color: 'navy', checked: false },
  { id: 7, text: 'study alone', color: 'gray', checked: true },
  { id: 8, text: 'study alone', color: 'deep_gray', checked: false },
  { id: 9, text: 'rest', color: 'deep_red', checked: false },
  { id: 10, text: 'study alone', color: 'deep_green', checked: true },
];

const Home: NextPage = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    console.log('toggle mount');
    setToggle(!toggle);
  };

  return (
    <>
      <div>
        {toggle ? <TodoList todos={todos} /> : <div>none</div>}
        {/* <button type='button' onClick={handleToggle}>
          toggle mount
        </button> */}
      </div>
    </>
  );
};

export default Home;
