import React from "react";
import location from "../images/location.png";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../images/${props.item.coverImg}`}
        alt="Card Photo"
        className="card--image"
      />
      <div className="card--details">
        <img
          src={location}
          alt="Location logo"
          className="card--location--logo"
        />
        <span className="card--location">{props.item.location}</span>
        <a href="https://www.google.com/maps/@50.5568799,9.6893186,14z">
          View on Google Maps
        </a>
        <h1>{props.item.title}</h1>
        <h3 className="card--date">{props.item.date}</h3>
        <br />
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  );
}
