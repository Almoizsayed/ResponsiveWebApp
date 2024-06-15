import React from "react";
import { GridViewIcon, ListViewIcon, UsersIcon } from "../assets";

const UserCardView = () => {
  return (
    <div className=" w-full flex justify-between  mt-10  font-semibold">
      <div className=" ml-6 "> Users</div>
      <div flex items-center>
        <button className="border-[4px] p-2 border-white shadow-lg bg-white display:flex items-center">
          <ListViewIcon className="text-[#641CC0]" />
        </button>
        <button className="border-[4px] p-2 border-[#641CC0] shadow-lg bg-[#641CC0] display:flex items-center">
          <GridViewIcon className="text-[#FFFFFF]" />
        </button>
        <button className="bg-[#641CC0] text-[#FFFFFF] w-44 h-10 mr-2 ml-2 p-2 ">
          {" "}
          +Add User
        </button>
      </div>
    </div>
  );
};

export default UserCardView;
