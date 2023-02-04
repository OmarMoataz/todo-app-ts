import { useState } from "react";

import { CreateTodoContainer, TodoLabel } from "./CreateTodo.style";
import { TodoInput, TodoButton } from '@/Components/CommonTodoStyles';

const CreateTodo: React.FC<{ onCreate: (todoTitle: string) => void }> = ({
  onCreate,
}) => {
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <CreateTodoContainer>
      <TodoLabel> New Todo: </TodoLabel>
      <TodoInput
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
