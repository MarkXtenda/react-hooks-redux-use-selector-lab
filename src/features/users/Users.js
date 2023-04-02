import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";


function Users() {
  const users = useSelector((state) => state.users);
  return (
    <div>
      <ul>
        Users:<br/>
        {users.map((user, key)=><li key = {key}>{user.username}</li>)}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
