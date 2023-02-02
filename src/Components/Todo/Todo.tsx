import { Todo as TodoType } from "@/Types/generic";

const Todo: React.FC<{ todo: TodoType }> = (props) => {
  const { todo } = props;

  return <div> {todo.title} </div>;
};

export default Todo;
