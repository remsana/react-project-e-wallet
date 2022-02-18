import React from "react";
import style from "./Cards.module.css";

function Cards() {
  return (
    <div className={style.cardDiv}>
      <div className={style.card}>
        <h5>Card 1</h5>
        <h6>Name</h6>
      </div>
      <div className={style.card}>
        <h5>Card 2</h5>
        <h6>Name</h6>
      </div>
      <div className={style.card}>
        <h5>Card 3</h5>
        <h6>Name</h6>
      </div>
      <div className={style.card}>
        <h5>Card 4</h5>
        <h6>Name</h6>
      </div>
    </div>
  );
}

export default Cards;
