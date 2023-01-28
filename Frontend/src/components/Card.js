import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ articles }) {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  const link = convertToSlug(articles.category);

  return (
    <div className="card" key={articles.id}>
      <Link to={`/${link}`}>
        <p> {articles.category} </p>
      </Link>
      <img className="images01" src={articles.image} alt="" />
      <h2>{articles.title}</h2>
      <div className="card__date">
        <p>{articles.date}</p>
      </div>
    </div>
  );
}

export default Card;
