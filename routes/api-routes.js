const router = require('express').Router();
const Workout = require('../models/Workout');

router.get('/api/workout', (req, res) => {
    Workout.find({})
        .then(workout => {
            return workout;
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workout', ({ body }, res) => {
    Workout.create(body)
        .then(workout => {
            return res.json(workout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;