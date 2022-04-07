import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { AddTodo } from '../../components/AddTodo';
import { addTodoAPI } from '../../lib/api/todo';
import { TodoType } from '../../types/todo';

const Todo: NextPage = () => {
  const router = useRouter();

  type AddTodoType = {
    text: string
    selectedColor: TodoType["color"]
  }

  const handlerAddtodo = ({ text, selectedColor }: AddTodoType) => {
    try {
      if (!text || !selectedColor) {
        const message = 'Select color and write text';
        alert(message);
        return;
      }
      addTodoAPI({ text, color: selectedColor });
      router.push('/');
    } catch (e) {
      console.error(e);
    }
  };

  return <AddTodo addTodo={handlerAddtodo} />;
};

export default Todo;
