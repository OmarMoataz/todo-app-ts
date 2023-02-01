import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "../../UsersList";

const Home: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const usersResponse = await axios.get("http://localhost:3000/users");

      setUsers(usersResponse.data);
    };

    getUsersData();
  }, []);

  return <UsersList users={users}/>;
};

export default Home;
