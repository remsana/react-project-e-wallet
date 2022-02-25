import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";
import style from "./Card.module.css";
import { getName } from "../redux/apiSlice";

function Cards({ userName }) {
  let { cards, activeCard } = useSelector((state) => state.homepage);

  const dispatch = useDispatch();

  //Api
  useEffect(() => {
    dispatch(getName());
  }, []);

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

        {cards.length < 3 ? (
          <Link
            to={{
              pathname: "/addcard",
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
