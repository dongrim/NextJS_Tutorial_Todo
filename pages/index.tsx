import type { NextPage, GetServerSideProps } from 'next';
import { TodoType } from '../types/todo';
import { getTodosAPI } from '../lib/api/todo';
import TodoListConnector from '../components/TodoListConnector';
import { wrapper } from '../redux/store';
import { todoActions } from '../redux/actions';

// interface IProps {
//   todos: TodoType[]
// }
// const Home: NextPage<IProps> = ({ todos }) => {
const Home: NextPage = (props) => {
  console.log('##', props);
  return <TodoListConnector />;
};

export default Home;

// Pre-rendering
// (SG: at build time) getStaticProps, getStaticPaths
// (SSR: on each request) getServerSideProps
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.loadData(data));
      return { props: {} };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }
);
