import axios from "axios";

const usersAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const getUsers = async () => {
  const usersResponse = await usersAPI.get('/users');

  return usersResponse.data;
}
