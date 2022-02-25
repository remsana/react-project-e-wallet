import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./Card.module.css";


function Cards({ userName }) {
  let { cards, activeCard } = useSelector((state) => state.homepage);

  return (
    <>
      {userName && (
        <h1>
          Welcome {userName.name.first} {userName.name.last} !
        </h1>
      )}
      <div className={style.cardDiv}>
        <div className={style.cardActive}>
          {userName && (
            <h4>
              {userName.name.first.toUpperCase()}{" "}
              {userName.name.last.toUpperCase()}
            </h4>
          )}
          <h5>{activeCard.cardNo}</h5>
          <h5>{activeCard.vendor}</h5>
        </div>
        {cards.map((card, i) => {
          return (
            <div key={i}>
              {userName && (
                <Card
                  card={card}
                  index={i}
                  first={userName.name.first}
                  last={userName.name.last}
                />
              )}
            </div>
          );
        })}

{cards.length < 3 && userName ? (
          <Link
            to={{
              pathname: "/addcard",
              firstName: userName.name.first,
              lastName: userName.name.last,
            }}
          >
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
