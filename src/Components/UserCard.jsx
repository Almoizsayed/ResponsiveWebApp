import React from "react";
import useUserStore from "./useUserStore";

export default function UserCard({ user }) {
  // const users = useUserStore((state) => state.users);
  // {
  //   console.log(users);
  // }

  return (
    // w-4/5 max-w-6xl mx-auto
    // <div className="grid grid-cols-3 grid-rows-3 gap-5 ">
    <div className="flex p-1 mt-2 ml-4 border border-gray-300  rounded-md bg-gray-100 h-28 w-80">
      <img
        src={user.photo}
        alt={`${user.firstName} ${user.lastName}`}
        className="m-2 p-3 rounded-full"
      />
      <div>
        <h2 className="m-2 p-0 text-[#63666b]">{`${user.firstName} ${user.lastName}`}</h2>
        <p className=" text-[#63666b] m-2 text-[13px]">{user.email}</p>
        <div className="flex  items-center h-8 ">
          {user.status === "Active" ? (
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(10,210,42,1)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          ) : (
            <svg
              className="mx-3"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="rgb(255,153,0,1)"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          )}{" "}
          {user.status}{" "}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="rgb(100,28,192)"
        className="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </svg>
    </div>
    // </div>
  );
}
