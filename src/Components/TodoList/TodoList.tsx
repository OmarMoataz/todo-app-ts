import Todo from "@/Components/Todo";
import { Todo as TodoInterface } from "@/Types/generic";
import CreateTodo from "@/Components/CreateTodo";
import SectionGap from "@/Components/SectionGap";

const TodoList: React.FC<{
  todos: Array<TodoInterface>;
  onUpdate: (todo: TodoInterface) => void;
  onDelete: (id: number) => void;
  onCreate: (todoTitle: string) => void;
}> = (props) => {
  const { todos, onUpdate, onDelete, onCreate } = props;

  return (
    <>
      <SectionGap gap={20}/>
      <CreateTodo onCreate={onCreate}/>
      <ul>
        {todos.map((todo: TodoInterface) => (
          <li key={todo.id}>
            <SectionGap gap={10} />
            <Todo onUpdate={onUpdate} onDelete={onDelete} todo={todo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
