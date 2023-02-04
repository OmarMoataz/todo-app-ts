import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UsersList from "@/Components/UsersList";
import TodoList from "@/Components/TodoList";
import SectionGap from "@/Components/SectionGap";
import { Todo } from "@/Types/generic";
import { createTodo, deleteTodo, editTodo, getTodos } from "@/Api/todos";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState<number>(1);
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentUserId(parseInt(e.target.value));
  };

  const handleCreate = async (todoTitle: string) => {
    try {
      const newTodo = { title: todoTitle, completed: false, userId: currentUserId };
      const todoId = await createTodo({ title: todoTitle, completed: false, userId: currentUserId });

      setTodos([{ id: todoId, ...newTodo }, ...todos]);
    } catch (e) {
      console.log('failed to create todo');
    }
  }

  const handleTodoUpdate = async (todo: Todo) => {
    const returnedTodo = await editTodo(todo);

    const todoIndex = todos.findIndex(
      (todoInData: Todo) => todo.id == todoInData.id
    );

    const newTodos = [
      ...todos.slice(0, todoIndex),
      returnedTodo,
      ...todos.slice(todoIndex + 1, todos.length),
    ];

    setTodos(newTodos);
  };

  const handleTodoDelete = (todoId: number) => {
    try {
      deleteTodo(todoId);

      setTodos(todos.filter((todo: Todo) => todo.id != todoId));
    } catch (e) {
      console.log("error deleting todo");
    }
  };

  const getUsersData = useCallback(async () => {
    const usersResponse = await axios.get(import.meta.env.VITE_USERS_API);

    setUsers(usersResponse.data);
  }, []);

  const getTodosData = useCallback(async () => {
    const todos = await getTodos(currentUserId);

    setTodos(todos);
  }, [currentUserId]);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  useEffect(() => {
    getTodosData();
  }, [getTodosData, currentUserId]);

  return (
    <>
      <SectionGap gap={10} />
      <h1> Todos </h1>
      <SectionGap gap={10} />
      <UsersList onChangeUser={handleUserChange} users={users} />
      <TodoList
        onCreate={handleCreate}
        onDelete={handleTodoDelete}
        onUpdate={handleTodoUpdate}
        todos={todos}
      />
    </>
  );
};

export default Home;
