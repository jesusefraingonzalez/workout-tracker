const { Schema } = require('mongoose');

const exerciseSchema = new Schema({
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
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
// type: "resistance",
// name: "Bench Press",
// duration: 20,
// weight: 300,
// reps: 10,
// sets: 4
// distance 
// duration