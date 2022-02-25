import React from "react";
import style from "./Card.module.css";
import { deleteCard, moveCard } from "../redux/homepageSlice";
import { useDispatch } from "react-redux";

function Card({ card, index, first, last }) {
  const dispatch = useDispatch();

  const handleDeleteCard = (index) => {
    dispatch(deleteCard(index));
  };

  const handleMoveCard = (index) => {
    dispatch(moveCard(index));
  };

  return (
    <div
      className={style.cardContainer}       
    >
      <div className={style.card} >
      <h4>
        {first.toUpperCase()} {last.toUpperCase()}
      </h4>
      <h5>{card.cardNo}</h5>
      <h5>{card.vendor}</h5>
      </div>
      <div className={style.buttonDiv}>
        <button className={style.button} onClick = {() => {
        handleDeleteCard(index);
      }}>delete</button>
       
        <button className={style.button} onClick={() => {
        handleMoveCard(index);
      }}>active</button>
      </div>
    </div>
  );
}

export default Card;
