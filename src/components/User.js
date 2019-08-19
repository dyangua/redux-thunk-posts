import React from "react";

const User = ({ user }) => {
  return (
    <div>
      <h6> AUTHOR INFO </h6>
      <strong>{user.username}</strong>
      <em> {user.email} </em>
    </div>
  );
};

export default User;
