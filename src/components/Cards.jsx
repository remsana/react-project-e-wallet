import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Card from "./Card";
import style from "./Card.module.css";
import { getName } from "../redux/apiSlice";

function Cards() {
  const { cards, activeCard } = useSelector((state) => state.homepage);
  const { userName, status } = useSelector((state) => state.api);



  // console.log(userName);
  // console.log(status);
  const dispatch = useDispatch();

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
          <h4>
            {activeCard.firstName} {activeCard.lastName}
          </h4>
          <h5>{activeCard.cardNo}</h5>
        </div>
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <Card card={card} index={i} />
            </div>
          );
        })}
        {cards.length < 3 ? (
          <Link to={{
            pathname: "/addcard",
            firstName: `${userName.name.first}`,
            lastName: `${userName.name.last}`
            }}>
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
