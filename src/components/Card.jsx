import React from "react";
import style from "./Card.module.css";

function Card({ card }) {
  console.log(card);
  return (
    <div className={style.card}>
      <h5 >Card No. {card.id}</h5>
      <h6>{card.firstName} {card.lastName}</h6>
    </div>
  );
}

export default Card;
