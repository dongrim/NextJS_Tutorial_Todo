import type { NextPage, GetServerSideProps } from 'next';
import TodoList from '../components/TodoList';
import { TodoType } from '../types/todo';
import { getTodosAPI } from '../lib/api/todo';
import TodoListConnector from '../components/TodoListConnector';

/* const todos: TodoType[] = [
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
  { id: 11, text: 'done', color: 'red', checked: false },
]; */

interface IProps {
  todos: TodoType[]
}

const Home: NextPage<IProps> = ({ todos }) => {
  // return <TodoList todos={todos} />;
  return (
    <>
      <TodoList todos={todos} />
      <TodoListConnector />
    </>
  );
};

export default Home;

// Pre-rendering
// (SG: at build time) getStaticProps, getStaticPaths
// (SSR: on each request) getServerSideProps
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data } = await getTodosAPI();
    return {
      props: { todos: data }
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
};
