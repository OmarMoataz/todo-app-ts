import { useState } from "react";

import { CreateTodoContainer, TodoLabel } from "./CreateTodo.style";
import { TodoInput, TodoButton } from '@/Components/CommonTodoStyles';

const CreateTodo: React.FC<{ onCreate: (todoTitle: string) => void }> = ({
  onCreate,
}) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onCreate(todoTitle);
    }
  };

  return (
    <CreateTodoContainer>
      <TodoLabel> New Todo: </TodoLabel>
      <TodoInput
        onKeyDown={(e) => handleKeyPress(e)}
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <TodoButton
        onClick={() => onCreate(todoTitle)}
      >
        Save
      </TodoButton>
    </CreateTodoContainer>
  );
};

export default CreateTodo;
