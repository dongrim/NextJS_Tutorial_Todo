import React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { loadData } from '../redux/actions';

const mapStateToProps = (v) => {
  return {
    ...v
  };
};

const mapDispatchToProps = {
  loadData
};

const TodoListConnector = (props) => {
  console.log('@TodoListConnector', props);
  return (
    <div>
      {/* <TodoList todos={}/> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListConnector);
