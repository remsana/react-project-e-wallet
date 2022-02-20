import React from "react";
import style from "./Card.module.css";
import { deleteCard, moveCard } from "../redux/homepageSlice";
import { useDispatch } from "react-redux";

function Card({ card, index }) {
  const dispatch = useDispatch();

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
  };

  const handleMoveCard = (index) => {
    dispatch(moveCard(index));
  };

  return (
    <div
      className={style.card}
      onClick={() => {
        handleMoveCard(index);
      }}
    >
      <h6>
         {card.firstName} {card.lastName}
      </h6>
    </div>
  );
}

export default Card;
