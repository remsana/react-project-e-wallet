import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";
import style from "./Card.module.css";
import { getName } from "../redux/apiSlice";
import { activeCardDetails } from "../redux/homepageSlice";

function Cards() {
  let { cards, activeCard } = useSelector((state) => state.homepage);
  const { userName } = useSelector((state) => state.api);

  const dispatch = useDispatch();

  //Api
  useEffect(() => {
    dispatch(getName());
  }, []);

  //Username been sent to update in active card object
  if (userName) {
    dispatch(activeCardDetails(userName));
  }

  return (
    <>
      {userName && (
        <h1>
          Welcome {userName.name.first} {userName.name.last} !
        </h1>
      )}
      <div className={style.cardDiv}>
        <div className={style.cardActive}>
          <h4>
            {activeCard.id}. {activeCard.firstName} {activeCard.lastName}
          </h4>
          <h5>{activeCard.cardNo}</h5>
          <h5>{activeCard.vendor}</h5>
        </div>
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} index={i} />
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
            <button
              onClick={() => {
                console.log(`${userName.name.first}`);
                console.log(`${userName.name.last}`);
              }}
              className={style.AddNewCardBtn}
            >
              {" "}
              Add a new card
            </button>
          </Link>
        ) : (
          console.log("cant add")
        )}
      </div>
    </>
  );
}

export default Cards;
