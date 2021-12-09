const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const db = require("./models");

const app = express();

const PORT = process.env.PORT || 3000;

const databaseURL = "workout";
const collections = ["exercises"];
const workoutDB = mongojs(databaseUrl, collections);

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
