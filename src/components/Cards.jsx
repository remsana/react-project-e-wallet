import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import style from "./Card.module.css";

function Cards() {
  const { cards } = useSelector((state) => state.homepage);
  console.log(cards);

  return (
    <div className={style.cardDiv}>
      {cards.map((card, i) => {
        return (
          <div key={i}>
            <Card card={card} />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
