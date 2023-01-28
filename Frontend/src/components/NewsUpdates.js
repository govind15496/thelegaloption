import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NewsUpdates.css";

function NewsUpdates() {
  const [Posts, SetPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => SetPosts(data))
      .catch((err) => console.log(err));
  }, []);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="newsupdates">
      {Posts.map((post) => {
        return (
          <div id={post.id} className="newsupdates__post">
            <Link to={`/top-stories/${convertToSlug(post.title)}/${post.id}`}>
              <h1> {truncateString(post.title, 15)} </h1>

              <p> {truncateString(post.body, 150)} </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default NewsUpdates;
