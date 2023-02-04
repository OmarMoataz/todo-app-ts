import axios from "axios";
import { Todo, PaginationObject } from "@/Types/generic";

const todosApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

const constructPaginationObject = (paginationLinks: string) => {
  let paginationLinksArr = paginationLinks.split(',');
  let paginationObject: PaginationObject = { first: "", last: "", next: "" };
  paginationLinksArr.forEach((link, index) => {
    let linkWithIndicator = link.split(';');
    linkWithIndicator[0] = linkWithIndicator[0].slice(0, linkWithIndicator[0].length - 1);
    if (index == 0) 
      linkWithIndicator[0] = linkWithIndicator[0].slice(1, linkWithIndicator[0].length);
    else
      linkWithIndicator[0] = linkWithIndicator[0].slice(2, linkWithIndicator[0].length);
    
    if (linkWithIndicator[1] == ' rel="first"') {
      paginationObject.first = linkWithIndicator[0];
    } else if (linkWithIndicator[1] == ' rel="next"') {
      paginationObject.next = linkWithIndicator[0];
    } else if (linkWithIndicator[1] == ' rel="prev"') {
      paginationObject.prev = linkWithIndicator[0];
    } else if (linkWithIndicator[1] == ' rel="last"') {
      paginationObject.last = linkWithIndicator[0];
    }
  })
  return paginationObject;
}

export const callNextAPI = async (link: string) => {
  const todosResponse = await axios.get(link);

  return todosResponse.data;
}

export const getTodos = async (currentUserId: number) => {
  const todosResponse = await todosApi.get(`/todos?userId=${currentUserId}&_sort=id&_order=desc&_page=1&_limit=10`);

  const paginationLinks = todosResponse.headers['link'];

  return [todosResponse.data, constructPaginationObject(paginationLinks)];
}

export const createTodo = async (todo: Todo) => {
  const todosResponse = await todosApi.post(`/todos`, todo);

  return todosResponse.data;
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