import React from "react";

const DeleteUser = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="border  p-4 w-full max-w-md bg-white">
        <div className="font-poppins text-center w-96 h-10 size-6 font-medium text-[#26282D]">
          Delete Confirmation
        </div>
        <div className="font-poppins w-96 h-7 size-4 text-center">
          {" "}
          Are You sure you want to Delete
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="w-20 h-10   bg-[#641cc0] text-white rounded"
            onClick={onConfirm}
          >
            {" "}
            Delete
          </button>
          <button
            className="w-20 h-10   text-[#26282D] rounded border border-[#d3d3d3]"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
