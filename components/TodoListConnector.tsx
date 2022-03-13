import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { loadData, addTodo, toggleCheck, deleteTodo } from '../redux/actions';

const mapStateToProps = (dataStore) => {
  console.log("@mapStateToProps:", dataStore);
  return { ...dataStore };
};

const mapDispatchToProps = {
  loadData,
  addTodo,
  toggleCheck,
  deleteTodo
};

const TodoListConnector = (props) => {
  console.log('@props', props);
  // eslint-disable-next-line react/destructuring-assignment
  const { todos } = props.TodoReducer;
  return <TodoList todos={todos} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListConnector);
