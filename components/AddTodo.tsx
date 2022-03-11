import React, { useState } from 'react';
import styled from 'styled-components';
import BrushIcon from '../public/statics/svg/brush.svg';
import pallete from '../styles/pallete';
import { TodoType } from '../types/todo';

const Container = styled.div`
  width: 100%;

  .add-todo-header {
    color: dimgray;
    padding: 12px;
    position: relative;
    border-bottom: 1px solid ${pallete.gray};
    .add-todo-header-title {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 1.125rem;
        margin: 0 0 15px;
      }
      .add-todo-submit-button {
        text-transform: uppercase;
        font-size: 0.725rem;
        border-radius: 5px;
        height: 30px;
        border: 1px solid black;
        background-color: white;
        padding: 0 12px;
        cursor: pointer;
      }
    }
  }
  .add-todo-colors-wrapper {
    display: flex ;
    justify-content: space-between;
    .add-todo-color-list {
      display: flex;
      .add-todo-color-button {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: none;
      outline: none;
      cursor: pointer;
      }
      .add-todo-selected-color {
        border: 2px solid black;
      }
    }
    .add-color-button {
      cursor: pointer;
    }
  }
  .add-todo-textarea {
    width: 100%;
    border-radius: 5px;
    height: 300px;
    border-color: ${pallete.gray};
    margin-top: 12px;
    resize: none;
    padding: 12px;
    font-size: 0.8125rem;
  }
`;

export const AddTodo: React.FC<any> = ({ addTodo }) => {
  const [text, setText] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<TodoType['color']>();

  return (
    <Container>
      <div className="add-todo-header">
        <div className='add-todo-header-title'>
          <p>Add Todo</p>
          <button
            type='button'
            className='add-todo-submit-button'
            onClick={() => addTodo({ text, selectedColor })}
          >
            add schedule
          </button>
        </div>
        <div className='add-todo-colors-wrapper'>
          <div className='add-todo-color-list'>
            {Object.entries(pallete).map((color, idx) => (
              <button
                key={idx}
                type="button"
                className={`
                  bg-${color[0]}
                  add-todo-color-button
                  ${color[0] === selectedColor ? 'add-todo-selected-color' : ''}
                  `}
                style={{ background: pallete[color[0]] }}
                onClick={() => setSelectedColor(color[0] as TodoType['color'])}
              />
            ))}
          </div>
          <BrushIcon
            className="add-color-button"
            onClick={() => console.log('click brush')}
          />
        </div>
      </div>
      <div>
        <textarea
          className="add-todo-textarea"
          placeholder="What's you have to do Today?"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
      </div>
    </Container>
  );
};
