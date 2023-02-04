import { Todo as TodoInterface } from "@/Types/generic";
import { useState, useEffect } from "react";
import {
  TodoItem,
  TodoButton,
  TodoTitle,
  TodoInput,
  TodoButtons,
} from "./Todo.style";

const Todo: React.FC<{
  todo: TodoInterface;
  onUpdate: (todo: TodoInterface) => void;
  onDelete: (id: number) => void;
}> = (props) => {
  const { todo, onUpdate, onDelete } = props;

  const [isEditMode, setEditMode] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    setTodoTitle(todo.title);
  }, [todo]);

  const handleCheck = (e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      onUpdate({ ...todo, completed: true });
    } else {
      onUpdate({ ...todo, completed: false });
    }
  };

  return (
    <TodoItem>
      {isEditMode ? (
        <TodoInput
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      ) : (
        <TodoTitle checked={todo.completed}> {todoTitle} </TodoTitle>
      )}

      <TodoButtons>
        <input type="checkbox" onChange={handleCheck} />
        {isEditMode ? (
          <TodoButton
            onClick={() => {
              onUpdate({ ...todo, title: todoTitle });
              setEditMode(false);
            }}
          >
            Save
          </TodoButton>
        ) : (
          <TodoButton
            onClick={() => {
              setTodoTitle(todo.title);
              setEditMode(true);
            }}
          >
            Edit
          </TodoButton>
        )}
        <TodoButton onClick={() => onDelete(todo.id)}> Delete </TodoButton>
      </TodoButtons>
    </TodoItem>
  );
};

export default Todo;
