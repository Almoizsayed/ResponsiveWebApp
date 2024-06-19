import React from "react";
import UserCard from "./UserCard";
import useUserStore from "./useUserStore";
const UserGridView = () => {
  const users = useUserStore((state) => state.users);
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5 ">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
