const router = require("express").Router();
const db = require("../models");

//Gets all workouts in database
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
