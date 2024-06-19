import React, { useState } from "react";
import useUserStore from "./useUserStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [lastLogin, setLastlogin] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [users, lastUserId] = useUserStore;
  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);
  const handleSubmit = (e) => {
    e.preventDefault;
    if (password !== confirmPassword) alert("Password doesnt Match");
    return;
  };
  const newUserId = lastUserId + 1;
  const newUser = {
    id: newUserId,
    photo: "https://via.placeholder.com/100",
    firstName,
    lastName,
    email,
    phone,
    role,
    status,
    lastLogin: new Date().toISOString(),
  };
  addUser(newUser);
  setFirstName("");
  setLastName("");
  setEmail("");
  setPhone("");
  setRole("User");
  setStatus("Active");
  setPassword("");
  setConfirmPassword("");

  navigate("/");
  toast.success("User Added Successfully");

  return <div></div>;
};

export default AddUser;
