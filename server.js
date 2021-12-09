const express = require("express");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const db = require("./models");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3000;

const databaseURL = "workoutDB";
const collections = ["exercises"];
const workoutDB = mongojs(databaseURL, collections);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
