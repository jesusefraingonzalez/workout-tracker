const router = require('express').Router();
const Workout = require('../models/Workout');

// get route to get the last workout, getLastWorkout
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(workout => {
            return res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// put route to add an exercise to a workout, addExercise()
router.put('/api/workouts/:id', ({ body, params }, res) => {
    console.log({ params }, { body });
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true })
        .then(workout => {
            console.log(workout);
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// post route to create a new workout, createWorkout()
router.post('/api/workouts', ({ body }, res) => {
    Workout.create({ body }, { new: true })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// get the workouts in range, getWorkoutsInRange()
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration' } } }])
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});


module.exports = router;