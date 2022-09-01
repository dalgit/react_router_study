import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "./CardList/CardList";
import "./Users.scss";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);

  return (
    <div className="users">
      <h1>Assignment - Query String</h1>
      <div className="pageBtn">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <CardList users={users} />
    </div>
  );
}

export default Users;
