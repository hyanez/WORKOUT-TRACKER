const router = require("express").Router();
const { Exercise } = require("../models");
const db = require("../models");

//Gets all workouts in database
router.get("/api/workouts", (req, res) => {
  if (Exercise.type === "cardio") {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDistance: { $sum: "$exercises.distance" },
        },
      },
    ]);
  }

  db.Workout.aggregate([
    {
      $addFields: {
        totalWeight: { $sum: "$exercises.weight" },
      },
    },
  ]);

  db.Workout.find({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
