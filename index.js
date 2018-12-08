const express = require("express");
const path = require("path");
const port = 8888;

const app = express();
app.use(express.static("public"));
app.use(express.static("public/img"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => {
  console.log("server is listening");
});
