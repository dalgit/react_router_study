import React from "react";
import Card from "../../../components/Card/Card";
import "./CardList.scss";
import { Link } from 'react-router-dom';

function CardList({ monsters }) {

  return (
    <div className="cardList">
      {monsters.map(({ id, name, email }) => {
        return(
        <Link to={`/detail/${id}`}>
          <Card key={id} id={id} name={name} email={email} />
        </Link>
        );
      })}
    </div>
  );
}

export default CardList;
