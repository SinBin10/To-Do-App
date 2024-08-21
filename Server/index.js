const express = require("express");
const cors = require("cors");
const taskModel = require("./models/task-model");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const alltasks = await taskModel.find();
  res.send(alltasks);
});

app.post("/create", async (req, res) => {
  await taskModel.create({
    task: req.body.task,
  });
  res.status(200).send();
});

app.listen(3000);
