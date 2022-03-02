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
      <div className={style.allCardsContainer}>
        <div className={style.cardActive}>
          <div className={style.theCard}>
            <div className={style.cardFront}>
              <div className={style.mapImg}>
                <div className={style.row}>
                  <div className={style.chip}></div>
                  <div className={style.visa}></div>
                </div>
                <h3 className={style.cardNumber}>{activeCard.cardNo}</h3>
                <div className={style.row}>
                  <h6></h6>
                  <h6>VALID THRU</h6>
                </div>
                <div className={style.row}>
                  {userName && (
                    <p>
                      {userName.name.first.toUpperCase()}{" "}
                      {userName.name.last.toUpperCase()}
                    </p>
                  )}
                  <p>{activeCard.validity}</p>
                </div>
              </div>
            </div>
            <div className={style.cardBack}>
              <div className={style.strip}></div>
              <div className={style.row}>
                <div className={style.patternImage}></div>
                <p className={style.cvv}>{activeCard.ccvNo}</p>
              </div>
            </div>
          </div>
        </div>
        {cards.map((card, i) => {
          return (
            <div className={style.cardContainer} key={i}>
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
