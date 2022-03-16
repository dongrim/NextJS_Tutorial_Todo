import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { AddTodo } from '../../components/AddTodo';
import { addTodoAPI } from '../../lib/api/todo';
import { TodoType } from '../../types/todo';

const Todo: NextPage = (props) => {
  console.log('###', props);
  const router = useRouter();

  type AddTodo = {
    text: string
    selectedColor: TodoType["color"]
  }

  const handlerAddtodo = ({ text, selectedColor }: AddTodo) => {
    try {
      if (!text || !selectedColor) {
        const message = 'Select color and write text';
        alert(message);
        return;
      }
      addTodoAPI({ text, color: selectedColor });
      console.log('Add Success');
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return <AddTodo addTodo={handlerAddtodo} />;
};

export default Todo;
