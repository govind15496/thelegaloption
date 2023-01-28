import React from "react";
import "./CardDetails.css";
import { useParams } from "react-router-dom";
import { data } from "./data";
import { Link } from "react-router-dom";

function CardDetails() {
  const { slug } = useParams();

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const p = data.articles.find(
    (article) => convertToSlug(article.title) === slug
  );
  const cate = convertToSlug(p.category);
  return (
    <div className="carddetails" key={p.id}>
      <div className="carddetails__link">
        <Link to="/">
          {" "}
          <h5>Home/</h5>
        </Link>{" "}
        <Link to={`/${cate}`}>
          <h5>{p.category}</h5>
        </Link>
      </div>
      <h2> {p.title} </h2>
      <p className="carddetails__date"> {p.date} </p>
      <img className="carddetailes__img" src={`../${p.image}`} alt="" />
      <p> {p.description} </p>
    </div>
  );
}

export default CardDetails;
