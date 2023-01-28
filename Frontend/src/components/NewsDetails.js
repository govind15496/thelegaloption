import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewsDetails.css";

function NewsDetails() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [photo, setPhoto] = useState({});

  // function makeTitle(slug) {
  //     var words = slug.split('-');

  //     for (var i = 0; i < words.length; i++) {
  //       var word = words[i];
  //       words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  //     }

  //     return words.join(' ');
  //   }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [post.userId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${1}`)
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, []);
  return (
    <div className="newsdetails">
      <div className="newsdetails__user">
        <p>Author Name : {user.name} </p>
        <p>Author Email : {user.email ? user.email : " Hidden"}</p>
      </div>
      <h1>{post.title}</h1>
      <img src={photo.albumId} alt="" />
      <p>{post.body}</p>
    </div>
  );
}

export default NewsDetails;
