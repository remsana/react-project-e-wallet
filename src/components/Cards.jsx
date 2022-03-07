import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";
import style from "./Card.module.css";

function Cards({ userName }) {
  let { cards, activeCard } = useSelector((state) => state.homepage);

  return (
    <>
      <div className={style.allCardsContainer}>
        <div className={style.activeCardContainer}>
          <div className={style.cardActive}>
            <div className={style.theCard}>
              <div
                className={
                  activeCard.vendor == "Visa"
                    ? "visaCardFront"
                    : activeCard.vendor == "Master Card"
                    ? "masterCardFront"
                    : "amexCardFront"
                }
              >
                <div
                  className={
                    activeCard.vendor == "Visa"
                      ? "mapImg"
                      : activeCard.vendor == "Master Card"
                      ? "masterCardImg"
                      : "amexCardImg"
                  }
                >
                  <div className={style.row}>
                    <div className={style.chip}></div>
                    <div
                      className={
                        activeCard.vendor == "Visa"
                          ? "visa"
                          : activeCard.vendor == "Master Card"
                          ? "masterCard"
                          : "amexCard"
                      }
                    ></div>
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
                    <p>
                      {activeCard.month}/{activeCard.year}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  activeCard.vendor == "Visa"
                    ? "visaCardBack"
                    : activeCard.vendor == "Master Card"
                    ? "masterCardBack"
                    : "amexCardBack"
                }
              >
                <div className={style.strip}></div>
                <div className={style.row}>
                  <div className={style.patternImage}></div>
                  <p className={style.cvv}>{activeCard.ccvNo}</p>
                </div>
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
            <button> Add a card </button>
          </Link>
        ) : (
          console.log("cant add")
        )}
      </div>
    </>
  );
}

export default Cards;
