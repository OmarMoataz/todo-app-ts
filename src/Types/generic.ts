export interface User {
  id: number,
  name: string;
}

export interface PaginationObject {
  first: string,
  next?: string,
  prev?: string,
  last: string,
}

export interface Todo {
  id?: number,
  title: string,
  completed: boolean,
  userId: number,
}