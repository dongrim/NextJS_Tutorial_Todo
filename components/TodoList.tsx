import { useRouter } from 'next/router';
import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import pallete from '../styles/pallete';
import { TodoType } from '../types/todo';
import TrashCanIcon from '../public/statics/svg/trash_can.svg';
import CheckMarkIcon from '../public/statics/svg/check_mark.svg';
import { checkTodoAPI, delTodoAPI } from '../lib/api/todo';

interface StyledProps {
  titleColor?: string;
}

const Container = styled.div<StyledProps>`
  width: 100%;

  .todo-trash-can {
    visibility: hidden;
  }

  .todo-list-header {
    color: ${props => props.titleColor};
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${pallete.gray};
    .todo-list-last-todo {
      font-size: 1.125rem;
      margin: 0 0 15px;
      span {
        font-weight: 600;
        margin-left: 12px;
      }
    }
    .todo-list-header-colors {
      display: flex;
      .todo-list-header-color-num {
        display: flex;
        margin-right: 15px;
        p {
          line-height: 25px;
          margin: 0;
          margin-left: 6px;
        }
        .todo-list-header-round-color {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }
    }
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${pallete.gray};
      &:hover {
        .todo-text {
          text-decoration: underline;
          text-underline-offset: 20%;
          text-decoration-thickness: 0.12rem;
          text-decoration-color: gray;
        }
        .todo-color-block {
          filter: brightness(85%);
        }
        .todo-trash-can {
          visibility: visible;
        }
      }

      .todo-left-side {
        flex: 3;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        &:hover + .todo-trash-can {
          visibility: hidden;
        }
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: gray;
          text-decoration: line-through;
        }
        .todo-text {
          cursor: pointer;
          margin-left: 12px;
          font-size: 1.125rem;
        }
      }

      .todo-right-side {
        flex: 1;
        position: relative;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        .todo-left-side:hover {
          background-color: red;
        }
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          position: absolute;
          transform: translateX(220%);
          fill: ${pallete.deep_red};
          opacity: 0.5;
          &:hover {
            opacity: 1;
          }
        }

        .todo-check-mark {
          position: absolute;
          transform: scale(160%) translateX(5%) translateY(-12%);
          fill: ${pallete.deep_green};
        }
        .todo-button {
          cursor: pointer;
          width: 23px;
          height: 23px;
          border-radius: 50%;
          border: 1px solid gray;
          background-color: transparent;
          /* outline: none; */
        }
      }
    }
  }
`;

// interface IProps {
//   todos: TodoType[];
// }
// <>: generic
// const TodoList: React.FC<IProps> = (props) => {
const TodoList = ({ TodoStates, addTodo, toggleCheck, deleteTodo }) => {
  const { todos } = TodoStates;
  const TodoActions = {
    toggleCheck,
    addTodo,
    deleteTodo,
  };
  // const [testToggle, setTestToggle] = useState(false);
  // const [localTodos, setLocalTodos] = useState(todos);

  // Container.defaultProps = {
  //   theme: {
  //     title: 'orange',
  //     color: 'red',
  //   },
  // };

  type ObjectIndexType = {
    // red: number;
    // orange: number;
    [key: string]: number | undefined;
  };

  const getTodoColorNums = useCallback(() => {
    const colors: ObjectIndexType = {};
    todos.forEach(todo => {
      const isExisted = colors[todo.color];
      if (!isExisted) {
        colors[todo.color] = 1;
      } else {
        colors[todo.color] = isExisted + 1;
      }
    });
    return colors;
  }, [todos]);

  const memoizedValue = useMemo(getTodoColorNums, [todos]);
  // console.log('@2', memoizedValue);

  // const router = useRouter();
  const toggleCheckTodo = (id: number): void => {
    try {
      checkTodoAPI(id, null); // check null
      TodoActions.toggleCheck(id);
      /* // # 1
      router.reload();
      // # 2
      router.push('/');
      // # 3
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
      setLocalTodos(newTodos); */
    } catch (e) {
      console.error(e);
    }
  };

  const removeTodo = async (_id: Number) => {
    try {
      const id = Number(_id);
      await delTodoAPI(id);
      TodoActions.deleteTodo(id);
      /* const filtetedTodos = todos.filter(todo => todo.id !== id);
      setLocalTodos(filtetedTodos); */
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container titleColor='dimgray'>
      <div className='todo-list-header'>
        <p className='todo-list-last-todo'>
          TODO remains: <span>{todos.length}</span>
        </p>
        <div className='todo-list-header-colors'>
          {Object.entries(memoizedValue).map((item, idx) => (
            <div className='todo-list-header-color-num' key={idx}>
              <div
                className={`todo-list-header-round-color bg-${item[0]}`}
                data-id={idx}
                style={{ background: pallete[item[0]] }}
              />
              <p>{item[1]}EA</p>
            </div>
          ))}
        </div>
      </div>
      {/* <input
        type='button'
        onClick={() => setTestToggle(prev => !prev)}
        value='fire'
      /> */}
      <ul className='todo-list'>
        {/* {todos.map((todo, idx) => ( */}
        {todos.map((todo, idx) => (
          <li className='todo-item' key={idx}>
            <div className='todo-left-side'>
              <div
                className={`todo-color-block bg-${todo.color}`}
                style={{ background: pallete[todo.color] }}
              />
              <p
                className={`todo-text ${
                  todo.checked ? 'checked-todo-text' : ''
                }`}
              >
                {todo.text}
              </p>
            </div>
            <div className='todo-right-side'>
              <TrashCanIcon
                className='todo-trash-can'
                onClick={() => removeTodo(todo.id)}
              />
              <button
                className='todo-button'
                type='button'
                onClick={() => toggleCheckTodo(todo.id)}
              />
              {todo.checked && (
                <CheckMarkIcon
                  className='todo-check-mark'
                  onClick={() => toggleCheckTodo(todo.id)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
