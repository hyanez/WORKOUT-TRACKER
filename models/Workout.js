const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

const WorkoutSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  exercise: [
    {
      type: Schema.Types.ObjectID,
      ref: "Exercise",
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
