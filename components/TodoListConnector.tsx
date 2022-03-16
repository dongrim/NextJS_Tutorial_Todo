import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todoActions } from '../redux/actions';

const mapStateToProps = (dataStore) => {
  return { ...dataStore };
};

const mapDispatchToProps = { ...todoActions };

const TodoListConnector = ({ FromRootReducer }: any) => {
  const { todos } = FromRootReducer;
  return <TodoList todos={todos} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListConnector);
