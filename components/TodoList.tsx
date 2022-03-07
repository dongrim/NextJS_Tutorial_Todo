import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import pallete from '../styles/pallete';
import { TodoType } from '../types/todo';
import TrashCanIcon from '../public/statics/svg/trash_can.svg';
import CheckMarkIcon from '../public/statics/svg/check_mark.svg';

console.log(CheckMarkIcon);

interface StyledProps {
  titleColor?: string;
}

const Container = styled.div<StyledProps>`
  width: 100%;

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
        /* margin-left: 8px; */
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
      }

      .todo-left-side {
        border: 1px solid blue;
        flex: 3;
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }
        .checked-todo-text {
          color: gray;
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 1.125rem;
        }
      }
      .todo-right-side {
        border: 1px solid red;
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 12px;
        svg {
          &:first-child {
            margin-right: 16px;
          }
        }
        .todo-trash-can {
          /* width: 20px; */
          path {
            fill: ${pallete.deep_red};
          }
        }
        .todo-check-mark {
          fill: ${pallete.deep_green};
        }
        .todo-button {
          width: 27px;
          height: 27px;
          border-radius: 50%;
          border: 1px solid gray;
          background-color: transparent;
          /* outline: none; */
        }
      }
    }
  }
`;

interface IProps {
  todos: TodoType[];
}
// <>: generic
const TodoList: React.FC<IProps> = ({ todos }) => {
  const [testToggle, setTestToggle] = useState(false);
  const [colorPallete, setColorPallete] = useState({
    red: 'red',
    gree: 'green',
    blue: 'blue',
  });

  Container.defaultProps = {
    theme: {
      title: 'orange',
      color: 'red',
    },
  };

  type ObjectIndexType = {
    // red: number;
    // orange: number;
    [key: string]: number | undefined;
  };

  const getTodoColorNums = useCallback(() => {
    const colors: ObjectIndexType = {};
    todos.forEach(todo => {
      console.log(todos);
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
  console.log('@2', memoizedValue);

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
              {todo.checked && (
                <>
                  <TrashCanIcon className='todo-trash-can' />
                  <CheckMarkIcon className='todo-check-mark' />
                </>
              )}
              {!todo.checked && (
                <button className='todo-button' type='button' />
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
