const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// a workout consists of a day and the exercises done
// Each exercise consists of a type, name, duration, weight, reps, sets, distance
const workoutSchema = new Schema({
    day: {
        type: Date,
        required: "Enter the date: ",
    },
    exercises: {
        type: {
            type: String,
            trim: true,
            required: "Enter the type of exercise: "
        },
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name: "
        },
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        },
    },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
