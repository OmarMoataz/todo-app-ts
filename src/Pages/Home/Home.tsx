import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UsersList from "@/Components/UsersList";
import TodoList from "@/Components/TodoList";
import SectionGap from "@/Components/SectionGap";
import { Todo } from "@/Types/generic";
import { deleteTodo, editTodo } from "@/Api/todos";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState<number>(1);
  const [todos, setTodos] = useState([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentUserId(parseInt(e.target.value));
  }

  const handleTodoUpdate = (todo: Todo) => {
    editTodo(todo);
  }

  const handleTodoDelete = (todoId: number) => {
    try {
      deleteTodo(todoId);

      setTodos(todos.filter((todo: Todo) => todo.id != todoId));
      
    } catch (e) {
      console.log('error deleting todo');
    }
  }

  const getUsersData = useCallback(async () => {
    const usersResponse = await axios.get(import.meta.env.VITE_USERS_API);

    setUsers(usersResponse.data);
  }, []);

  const getTodosData = useCallback(async () => {
    const todosResponse = await axios.get(`${import.meta.env.VITE_TODOS_API}?userId=${currentUserId}`);

    setTodos(todosResponse.data);
  }, [currentUserId]);

  useEffect(() => {
    getUsersData();
  }, [getUsersData]);

  useEffect(() => {
    getTodosData();
  }, [getTodosData, currentUserId]);

  return <>
    <SectionGap gap={10}/>
    <h1> Todos </h1>
    <SectionGap gap={10}/>
    <UsersList onChangeUser={handleUserChange} users={users} /> 
    <TodoList onDelete={handleTodoDelete} onUpdate={handleTodoUpdate} todos={todos}/>
  </>;
};

export default Home;
