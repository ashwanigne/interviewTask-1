const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

//allow access to
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);


app.get("/", async (req, res, next) => {
  var text = fs.readFileSync("https://tjdoad.com/files.json", "utf8");
  console.log(text);
  function removeDuplicates(arr) {
    const uniqueIds = new Set();

    const unique = arr.filter((element) => {
      const isDuplicate = uniqueIds.has(element.size);

      uniqueIds.add(element.size);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });
    return unique;
  }
  const data = removeDuplicates(JSON.parse(text));
  console.log("data --> ", data);
  res.status(200).json({
    success: true,
    data: data,
  });
});
 
app.listen(process.env.PORT ||5000, () => {
  console.log(`listening on port 5000 `);
});
