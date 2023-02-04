import axios from "axios";
import { Todo } from "@/Types/generic";

const todosApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const getTodos = async (currentUserId: number) => {
  const todosResponse = await todosApi.get(`/todos?userId=${currentUserId}`);

  return todosResponse.data;
}

export const createTodo = async (todo: Todo) => {

}

export const editTodo = async (todo: Todo) => {
  const todosResponse = await todosApi.patch(`/todos/${todo.id}`, {
    ...todo,
  })

  return todosResponse.data;
}

export const deleteTodo = async (todoId: number) => {
  const todosResponse = await todosApi.delete(`/todos/${todoId}`);

  return todosResponse;
}