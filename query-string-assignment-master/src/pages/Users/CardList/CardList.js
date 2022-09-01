import React from "react";
import Card from "../../../components/Card/Card";
import "./CardList.scss";
function CardList({ users }) {


  return (
    <div className="cardList">
      {users.map(({ id, name, email }) => {
        return <Card key={id} id={id} name={name} email={email} />;
      })}
    </div>
  );
}

export default CardList;
