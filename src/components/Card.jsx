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
      className={style.newCard}
      onClick={() => {
        handleMoveCard(index);
      }}
      onDoubleClick={() => {
        handleDeleteCard(index);
      }}
    >
      <div className={style.theCard}>
        <div
          className={
            card.vendor == "Visa"
              ? "visaCardFront"
              : card.vendor == "Master Card"
              ? "masterCardFront"
              : "amexCardFront"
          }
        >
          <div
            className={
              card.vendor == "Visa"
                ? "mapImg"
                : card.vendor == "Master Card"
                ? "masterCardImg"
                : "amexCardImg"
            }
          >
            <div className={style.row}>
              <div className={style.chip}></div>
              <div
                className={
                  card.vendor == "Visa"
                    ? "visa"
                    : card.vendor == "Master Card"
                    ? "masterCard"
                    : "amexCard"
                }
              ></div>
            </div>
            <h3 className={style.cardNumber}>{card.cardNo}</h3>
            <div className={style.row}>
              <h6></h6>
              <h6>VALID THRU</h6>
            </div>
            <div className={style.row}>
              <p>
                {first.toUpperCase()} {last.toUpperCase()}
              </p>
              <p>{card.validity}</p>
            </div>
          </div>
        </div>
        <div
          className={
            card.vendor == "Visa"
              ? "visaCardBack"
              : card.vendor == "Master Card"
              ? "masterCardBack"
              : "amexCardBack"
          }
        >
          <div className={style.strip}></div>
          <div className={style.row}>
            <div className={style.patternImage}></div>
            <p className={style.cvv}>{card.ccvNo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
