import React from "react";
import style from "./Cards.module.css";

function Cards() {
  return (
    <div>
      {/* <h2>List of cards</h2> */}
      <div className={style.cardDiv}>
        <div className={style.card}>Card 1</div>
        <div className={style.card}>Card 2</div>
        <div className={style.card}>Card 3</div>
        <div className={style.card}>Card 4</div>
      </div>
    </div>
  );
}

export default Cards;
