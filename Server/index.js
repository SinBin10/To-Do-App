const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("running fine..");
});

app.listen(3000, () => {
  console.log("server is running...");
});
