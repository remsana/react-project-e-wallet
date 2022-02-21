import React from "react";




import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "./Card";
import style from "./Card.module.css";

function Cards() {
  const { cards, activeCard } = useSelector((state) => state.homepage);
  const [userName, setUserName] = useState();

  useEffect(async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const item = data.results[0];
    setUserName(item);
  }, []);

  return (
    <>
     {userName && <h1>Welcome {userName.name.first} {userName.name.last} !</h1>}
      <div className={style.cardDiv}>
        <div className={style.cardActive}>
          
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
        {cards.length < 3 ? (
          <Link to="/addcard">
            <button className={style.AddNewCardBtn}> Add a new card</button>
          </Link>
        ) : (
          console.log("cant add")
        )}
      </div>
    </>
  );
}

export default Cards;
