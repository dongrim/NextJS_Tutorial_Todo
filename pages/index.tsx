import type { NextPage, GetServerSideProps } from 'next';
import { getTodosAPI } from '../lib/api/todo';
import TodoList from '../components/TodoList';
// import TodoListConnector from '../components/TodoListConnector';
// import { TodoType } from '../types/todo';

// import { wrapper } from '../redux/store/index-redux';
// import { todoActions } from '../redux/actions';
import { wrapper } from '../redux/store/index-toolkit';
import { setTodo } from '../redux/store/todoSlice';

// interface IProps {
//   todos: TodoType[]
// }
// const Home: NextPage<IProps> = ({ todos }) => {
const Home: NextPage = () => {
  return <TodoList />;
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<any> => {
    try {
      const { data } = await getTodosAPI();
      // store.dispatch(todoActions.loadData(data));
      store.dispatch(setTodo(data));
      return { props: {/* todos: data */} };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }
);
