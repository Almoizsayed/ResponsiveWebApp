import React from "react";
import UserCard from "./UserCard";
const users = (state) => state.users;

const UserGridView = () => {
  return (
    <div className="flex justify-start p-5 items-center ">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
