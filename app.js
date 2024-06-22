const express = require("express");

const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Server is working great!👍 :)" });
});

app.listen(8080, () => {
  console.log(`App listening at 8080🔥`);
});
