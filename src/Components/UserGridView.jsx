import React from "react";
import UserCard from "./UserCard";
import useUserStore from "./useUserStore";
const UserGridView = () => {
  const users = useUserStore((state) => state.users);
  return (
    <div className="flex items-center flex-wrap">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGridView;
