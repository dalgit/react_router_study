import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "./CardList/CardList";
import "./Users.scss";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  useEffect(() => {
    fetch(`http://localhost:8000/users?start=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, [limit, offset]);

  const movePage = (pageNumber) => {
    searchParams.set('offset', (pageNumber - 1) * 10);
    setSearchParams(searchParams);
  };

  return (
    <div className="users">
      <h1>Assignment - Query String</h1>
      <div className="pageBtn">
        <button onClick={() => movePage(1)}>1</button>
        <button onClick={() => movePage(2)}>2</button>
        <button onClick={() => movePage(3)}>3</button>
        <button onClick={() => movePage(4)}>4</button>
        <button onClick={() => movePage(5)}>5</button>
      </div>
      <CardList users={users} />
    </div>
  );
}

export default Users;
