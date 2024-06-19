import React from "react";
import useUserStore from "./useUserStore";
import { useState } from "react";
import formatDistanceToNow from "date-fns";

const UserListView = () => {
  const users = useUserStore((state) => state.users);
  const getLastLoginDisplay = (lastLogin) => {
    return formatDistanceToNow(new Date(lastLogin), { addSuffix: true });
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 font-poppins text-[#63666B] ">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-12 px-4 py-2 text-left">
              <input type="checkbox" classname=" w-4 h-4" />
            </th>
            <th className="text-[14px]  px-4 py-2 text-left">ID </th>
            <th className="text-[14px]  px-4 py-2 text-left">Name </th>
            <th className="text-[14px]  px-4 py-2 text-left">Email </th>
            <th className="text-[14px]  px-4 py-2 text-left">Phone</th>
            <th className="text-[14px]  px-4 py-2 text-left">LastLogin </th>
            <th className="text-[14px]  px-4 py-2 text-left">Role</th>
            <th className="text-[14px]  px-4 py-2 text-left">status </th>
            <th className="text-[14px]  px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((users) => (
            <tr key={users.id}>
              <td className="text-[14px] px-4 py-2">
                <input type="checkbox" className="w-4 h-2" />
              </td>
              <td className="text-[14px] px-4 py-2">{users.id}</td>
              <td className="text-[14px] px-4 py-2">
                <div className="flex-item-center">
                  <img
                    className="w-8 h-4 rounded-full"
                    src={users.photo}
                    alt={`${users.firstname}${users.lastname}`}
                  />
                  <span className="whitespace-nowwrap">{`${users.firstname}${users.lastname}`}</span>
                </div>
              </td>
              <td className="text-[14px] px-4 py-2">{users.email}</td>
              <td className="hidden text-[14px] px-4 py-2 ">{users.phone} </td>
              <td className="hidden text-[14px] px-4 py-2 ">
                {getLastLoginDisplay(users.lastLogin)}
              </td>
              <td className="hidden text-[14px] px-4 py-2 ">{users.role}</td>
              <td className="hidden text-[14px] px-4 py-2 ">{users.status} </td>
              <td className="hidden text-[14px] px-4 py-2 ">
                {users.action}
                <select className="bg-white border border-[#777a81] rounded-md w-24 h-8">
                  <option>Action </option>
                  <option>Edit</option>
                  <option>Delete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListView;
