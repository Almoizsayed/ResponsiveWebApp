import React, { useEffect, useState } from "react";
import { GridViewIcon, ListViewIcon, UsersIcon } from "../assets";
import { FilterByIcon, SearchIcon, SortByIcon } from "../assets";
import UserGridView from "./UserGridView";
import UserListView from "./UserListView";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";

const UserCardView = () => {
  const [isGridView, setIsGridview] = useState(true);
  const navigate = useNavigate();

  const navigateToAddUser = () => {
    navigate("/add-user");
  };
  return (
    <div className="bg-[#F9F9F9] w-full h-18 flex  flex-col">
      <div className=" w-full flex justify-between  mt-10  font-semibold">
        <div className=" ml-6 "> Users</div>
        <div className="flex items-center">
          <button
            className="border-[4px] p-2 border-white shadow-lg bg-white display:flex items-center"
            onClick={() => setIsGridview(false)}
          >
            <ListViewIcon className="text-[#641CC0]" />
          </button>
          <button
            className="border-[4px] p-2 border-[#641CC0] shadow-lg bg-[#641CC0] display:flex items-center"
            onClick={() => setIsGridview(true)}
          >
            <GridViewIcon className="text-[#FFFFFF]" />
          </button>
          <button
            className="bg-[#641CC0] text-[#FFFFFF] w-44 h-10 mr-2 ml-2 p-2 "
            onClick={navigateToAddUser}
          >
            {" "}
            +Add User
          </button>
        </div>
      </div>
      <div className="flex justify-between m-4 gap-4 ">
        <div className="flex space-x-4">
          <button type="button" className="bg-white flex border-2 w-32 h-11">
            <SortByIcon className=" mt-2 ml-2 " />
            <p className="text-[#63666B] ml-2 p-2 "> Sort by </p>
          </button>
          <button
            type="button"
            className="bg-white flex border-2 mr-2.5 w-32 h-11"
          >
            <FilterByIcon className="mt-2" />
            <p className="text-[#63666B] p-2"> Filter by </p>
          </button>
        </div>

        <div className="flex items-center justify-between  p-2 border border-gray-300 rounded-md h-11 w-64">
          <button className="h-6 aspect-square">
            <input type="text" placeholder="Search..." />
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="flex">
        {isGridView ? <UserGridView /> : <UserListView />}
      </div>
    </div>
  );
};

export default UserCardView;
