import React from "react";

interface User {
  id: number,
  name: string;
}

interface UsersProps {
  users: Array<User>;
}

const UsersList: React.FC<UsersProps> = (props) => {
  const { users } = props;

  return (
    <select>
      {users.map((user: User) => {
        return <option key={user.id}> {user.name} </option>;
      })}
    </select>
  );
};

export default UsersList;
