const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

//allow access to
app.use(
  cors({
    origin: "*",
  })
);

app.get("/time", async (req, res, next) => {
  var text = fs.readFileSync("./files.json", "utf8");

  const PATTERN = "/time";
  const arr = JSON.parse(text);
  const getTime = arr.filter(function (arr) {
    return arr.path.indexOf(PATTERN) !== -1;
  });

  res.status(200).json({
    success: true,
    data: getTime,
  });
});

/// api for getting data keyword
app.get("/data", async (req, res, next) => {
  var text = fs.readFileSync("./files.json", "utf8");

  const PATTERN = "/data";
  const arr = JSON.parse(text);
  const getTime = arr.filter(function (arr) {
    return arr.path.indexOf(PATTERN) !== -1;
  });

  res.status(200).json({
    success: true,
    data: getTime,
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`listening on port 5000 `);
});
