import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todoActions } from '../redux/actions';

const mapStateToProps = (dataStore) => {
  return { ...dataStore };
};

const mapDispatchToProps = { ...todoActions };

const TodoListConnector = (props) => {
  return <TodoList {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListConnector);
