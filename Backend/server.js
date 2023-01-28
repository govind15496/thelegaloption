const express = require("express");
const dotenv = require("dotenv");
const articles = require("./data/articles");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Api Is running...");
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.get("/api/articles/:id", (req, res) => {
  const article = articles.find((n) => n._id === req.params.id);
  res.send(article);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
