import { Todo as TodoInterface } from "@/Types/generic";
import { useState, useEffect } from "react";
import { TodoItem, TodoButton, TodoTitle, TodoInput } from "./Todo.style";

const Todo: React.FC<{
  todo: TodoInterface;
  onUpdate: (todo: TodoInterface) => void;
  onDelete: (id: number) => void;
}> = (props) => {
  const { todo, onUpdate, onDelete } = props;

  const [isEditMode, setEditMode] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle(todo.title);
  }, [todo]);

  return (
    <TodoItem>
      {isEditMode ? (
        <>
          <TodoInput
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
          />
          <TodoButton
            onClick={() => {
              onUpdate({ ...todo, title: todoTitle });
              setEditMode(false);
            }}
          >
            Save
          </TodoButton>
        </>
      ) : (
        <>
          <TodoTitle> {todoTitle} </TodoTitle>
          <TodoButton onClick={() => {
            setTodoTitle(todo.title);
            setEditMode(true);
          }}> Edit </TodoButton>
        </>
      )}

      <TodoButton onClick={() => onDelete(todo.id)}> Delete </TodoButton>
    </TodoItem>
  );
};

export default Todo;
