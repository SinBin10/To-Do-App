const express = require("express");
const cors = require("cors");
const taskModel = require("./models/task-model");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("running fine..");
});

app.post("/create", async (req, res) => {
  await taskModel.create({
    task: req.body.task,
  });
  res.status(200).send();
});

app.listen(3000, () => {
  console.log("server is running...");
});
