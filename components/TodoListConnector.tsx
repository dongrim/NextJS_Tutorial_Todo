import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { todoActions } from '../redux/actions';

const mapStateToProps = (dataStore) => ({ ...dataStore });
const mapDispatchToProps = { ...todoActions };

const TodoListConnector = (props) => <TodoList {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(TodoListConnector);
