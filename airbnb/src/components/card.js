import React from "react";
import star from "./images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "Online";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        alt="Card Photo"
        className="card--image"
      />
      <div className="card--stats">
        <img src={star} alt="Star" className="card--star" />
        <span> {props.item.stats.rating} </span>
        <span className="gray">({props.item.stats.reviewCount}) | </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <b>From ${props.item.price}</b> / person
      </p>
    </div>
  );
}
