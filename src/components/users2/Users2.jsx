import React, { use } from "react";

const Users2 = ({ userPromised }) => {
  const users = use(userPromised);
  console.log(users);
  return <div></div>;
};

export default Users2;
