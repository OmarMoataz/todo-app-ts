import React from "react";

import { SelectContainer } from "./UsersList.style";

interface User {
  id: number,
  name: string;
}

interface UsersProps {
  users: Array<User>;
  onChangeUser: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

const UsersList: React.FC<UsersProps> = (props) => {
  const { users, onChangeUser } = props;

  return (
    <SelectContainer defaultValue={users[0]?.id} onChange={onChangeUser}>
      {users.map((user: User) => {
        return <option value={user.id} key={user.id}> {user.name} </option>;
      })}
    </SelectContainer>
  );
};

export default UsersList;
