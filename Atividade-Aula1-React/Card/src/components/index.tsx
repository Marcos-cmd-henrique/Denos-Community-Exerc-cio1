import React from "react";
import style from "./Card.module.css";

function Card({ title, description, rate, img }: any) {
  return (
    <div className={style.card}>
      <img src={img} />
      <div className={style.bodyCard}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Rate: {rate}
          {rate < 2 && <span> - Menos Avaliado</span>}
        </p>
      </div>
    </div>
  );
}

export default Card;