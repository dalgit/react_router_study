import React from "react";
import "./Card.scss";

function Card({ id, name, email }) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set2`} alt="user avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
