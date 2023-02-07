import { Todo as TodoInterface } from "@/Types/generic";
import { useState, useEffect, KeyboardEvent } from "react";
import IconEdit from "~icons/carbon/edit";
import IconDelete from "~icons/carbon/delete";
import IconSave from "~icons/carbon/save";

import { TodoInput, TodoButton } from "@/Components/CommonTodoStyles";
import { TodoItem, TodoTitle, TodoButtons } from "./Todo.style";

const Todo: React.FC<{
  todo: TodoInterface;
  onUpdate: (todo: TodoInterface) => void;
  onDelete: (id?: number) => void;
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

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onUpdate({ ...todo, title: todoTitle });
      setEditMode(false);
    }
  };

  return (
    <TodoItem>
      {isEditMode ? (
        <TodoInput
          onKeyDown={(e) => handleKeyPress(e)}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      ) : (
        <TodoTitle checked={todo.completed}> {todoTitle} </TodoTitle>
      )}

      <TodoButtons>
        <input
          type="checkbox"
          checked={todo.completed ? true : false}
          onChange={handleCheck}
        />
        {isEditMode ? (
          <TodoButton
            onClick={() => {
              onUpdate({ ...todo, title: todoTitle });
              setEditMode(false);
            }}
          >
            <IconSave />
          </TodoButton>
        ) : (
          <TodoButton
            onClick={() => {
              setTodoTitle(todo.title);
              setEditMode(true);
            }}
          >
            <IconEdit />
          </TodoButton>
        )}
        <TodoButton onClick={() => onDelete(todo.id)}>
          <IconDelete />
        </TodoButton>
      </TodoButtons>
    </TodoItem>
  );
};

export default Todo;
