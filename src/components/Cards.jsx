import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Card from "./Card";
import style from "./Card.module.css";

function Cards() {
  const { cards, activeCard } = useSelector((state) => state.homepage);  

  return (
    <div className={style.cardDiv}>
      <div className={style.cardActive}>
      <h5>Active Card</h5>
      <h6>
        {activeCard.firstName} {activeCard.lastName}
      </h6>
      </div>
      {cards.map((card, i) => {
        return (
          <div key={i}>
            <Card card={card} index={i} />
          </div>
        );
      })}
      {cards.length < 3 ? <Link to="/addcard"><button className={style.AddNewCardBtn}> Add a new card</button></Link> : console.log("cant add")}


      
    </div>
  );
}

export default Cards;
