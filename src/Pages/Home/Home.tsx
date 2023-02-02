import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import UsersList from "@/Components/UsersList";
import TodoList from "@/Components/TodoList";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [currentUserId, setCurrentUserId] = useState<number>(1);
  const [todos, setTodos] = useState([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentUserId(parseInt(e.target.value));
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
    <UsersList onChangeUser={handleUserChange} users={users} /> 
    <TodoList todos={todos}/>
  </>;
};

export default Home;
