import React from "react";
import { FilterByIcon, SearchIcon, SortByIcon } from "../assets";

const Functionality = () => {
  return (
    <div className="flex m-4 gap-4 ">
      <button type="button" className="bg-white flex border-2 w-32 h-11">
        <SortByIcon className="ml-2 " />
        <p className="text-[#63666B] ml-2 p-2 "> Sort by </p>
      </button>
      <button type="button" className="bg-white flex border-2 mr-2.5 w-32 h-11">
        <FilterByIcon />
        <p className="text-[#63666B] p-2"> Filter by </p>
      </button>
      <div class="flex items-center p-2 border border-gray-300 rounded-md h-30 w-84">
        <input type="text" placeholder="Search..." />
        <SearchIcon />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Functionality;
