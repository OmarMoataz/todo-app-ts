import Todo from "@/Components/Todo";
import { Todo as TodoType } from "@/Types/generic";
import SectionGap from "../SectionGap";

const TodoList:React.FC<{ todos: Array<TodoType> }> = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo: TodoType) => (
        <li key={todo.id}>
          <SectionGap gap={10}/>
          <Todo todo={todo}/>
        </li>
      ))}
    </ul>
  );
}
 
export default TodoList;