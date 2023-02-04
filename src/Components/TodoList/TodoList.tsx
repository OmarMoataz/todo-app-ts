import Todo from "@/Components/Todo";
import { Todo as TodoInterface } from "@/Types/generic";
import SectionGap from "../SectionGap";

const TodoList: React.FC<{
  todos: Array<TodoInterface>;
  onUpdate: (todo: TodoInterface) => void;
  onDelete: (id: number) => void;
}> = (props) => {
  const { todos, onUpdate, onDelete } = props;
  return (
    <ul>
      {todos.map((todo: TodoInterface) => (
        <li key={todo.id}>
          <SectionGap gap={10} />
          <Todo onUpdate={onUpdate} onDelete={onDelete} todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
