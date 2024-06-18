import React from "react";

const UserListView = () => {
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
      </table>
    </div>
  );
};

export default UserListView;
