import React from "react";
import logo from "../assets/Logo.svg";
import Dash from "../assets/Dashboard.svg";
import users from "../assets/users.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen p-3 bg-white shadow-lg  w-64">
      <div className="flex items-center gap-3 m-2 cursor-pointer">
        <img className="w-200 h-200" src={logo} alt="" />
      </div>
      <div className="flex items-center gap-3 m-2 cursor-pointer">
        <div className="mt-5 text-[#777a81]">MAIN MENU</div>
      </div>
      <div className="flex items-center gap-3 m-2 cursor-pointer">
        <img src={Dash} alt="" />
        <p className=" text-[#000000]">DashBoard</p>
      </div>
      <div className="flex items-center gap-3 m-2  bg-[#601BBF1A] cursor-pointer">
        <img src={users} alt="" />
        <p className=" text-[#641CC0]">Users</p>
      </div>
    </div>
  );
};

export default Sidebar;
