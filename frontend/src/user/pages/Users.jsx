import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max max",
      image: "https://www.fcbarca.com/static/gfx/fcbarcacomlogo.svg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
