const router = require("express").Router();
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

//Updates workout by ID
router.put("/api/workouts:id", (req, res) => {
  db.Workout.updateOne(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: { exercises: req.body },
    },
    (err, workoutDB) => {
      if (err) {
        console.log(err);
      }

      res.json(workoutDB);
    }
  );
});

//Post a workout to Workout database
router.post("/api/workouts", ({ body }, res) => {
  const workout = body;
  db.exercises.insert(workout, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

//Get workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workoutDB) => {
      res.json(workoutDB);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
