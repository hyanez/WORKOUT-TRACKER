const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  type: String,
  weight: String,
  sets: String,
  reps: String,
  duration: String,
  distance: String,
});
